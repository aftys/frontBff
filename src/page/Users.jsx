import * as React from 'react';
import { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject, Search, Selection } from '@syncfusion/ej2-react-grids';
import { BiHide, BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {users} from '../data'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios';
import { useEffect } from 'react';


const data = []



function FilterBar({setData,data}) {
    const initialstates = { association: true, donateur: true }
    const [filters, setFilters] = useState(initialstates);
    const [show, setShow] = useState(false);
    function setFilter(filter) {
        setFilters({ ...filters, [filter]: !filters[filter] });
    }
    useEffect(()=>{

        new Array(users).forEach(element => {
            if(filters.association===true && element.type==="Association"){
                setData([...data,users[i]])
            }
            if(filters.donateur===true && element.type==="Donateur"){
                setData([...data,element])
            }
            
        });
    }
    ,[])
   
    const activelink = "w-full h-12 flex items-center justify-start rounded-lg text-white bg-red-300 shadow-md pl-2 "
    const normalLink = "w-full h-12 flex items-center justify-start shadow-md bg-gray-100 rounded-lg border-gray-300  pl-2 border-[1px]"
    return (
        <>
            <motion.div onClick={() => setShow(!show)} className="cursor-pointer bg-white w-[120px] h-[40px] rounded-lg fixed  lg:top-[70px] top-[130px] left-4 z-10 border-[1px] border-gray-300 drop-shadow-md flex flex-col items-center justify-start gap-1 px-2 py-1">
                <div className="flex justify-between items-start text-lg  gap-4  w-full">
                    <p>filtrer</p>
                    <button class="h-full" >
                        {show ? <BiShow class="h-full" /> : <BiHide class="h-full" />}
                    </button>
                </div>
            </motion.div>
            <AnimatePresence>

                {
                    show && <motion.div
                        animate={{ x: 0 }}
                        initial={{ x: -170 }}
                        exit={{ x: -170 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="bg-white w-[150px] rounded-lg fixed text-md  lg:top-[123px] top-[183px] left-4 z-10 border-[1px] border-gray-300 drop-shadow-md flex flex-col p-2 gap-2 items-center justify-start"
                    >
                        <div className={filters.association ? activelink : normalLink} onClick={() => { setFilter("association") }}>Associations</div>
                        <div className={filters.donateur ? activelink : normalLink} onClick={() => { setFilter("donateur") }}>Donateurs</div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
};






export function Users() {
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Search'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const validationRules = { required: true };
    const orderidRules = { required: true, number: true };
    const pageSettings = { pageCount: 5 };
    
    const [data, setData] = React.useState([]);

    function actionComplete(args) {
        console.log(args)
        if ((args.requestType === 'save' && args.action === 'edit')) {
            axios.put(`http://localhost:8080/responsible/${args.data.id}`, args.data).then(res => console.log(res)).catch(err => console.log(err))
        }
        else if ((args.requestType === 'save' && args.action === 'add')) {
            axios.post(`http://172.16.5.50:8080/associations`, args.data).then(res => console.log(res)).catch(err => console.log(err))
        }
        else if (args.requestType === 'delete') {
            axios.delete(`http://localhost:8080/responsible/${args.data.id}`).then(res => console.log(res)).catch(err => console.log(err))
        }

    }

    React.useEffect(() => {
        axios.get('http://172.16.5.50:8080/associations/get-all')
            .then((response) => {
                setData(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <FilterBar/>
            <div className='control-pane   absolute m-auto max-w-screen-xl'>
                <div className=' bg-white rounded-xl overflow-hidden border-2 drop-shadow-md p-6'>
                    <div className='control-section'>
                        <GridComponent  dataSource={data} toolbar={toolbarOptions} t allowSelecting={true} allowPaging={true} enableStickyHeader={true} editSettings={editSettings} pageSettings={pageSettings} actionComplete={actionComplete}>
                            <ColumnsDirective>
                                <ColumnDirective field="nom" headerText="Nom" validationRules={validationRules}  ></ColumnDirective>
                                <ColumnDirective field="prenom" headerText="Prenom" validationRules={validationRules} ></ColumnDirective>
                                <ColumnDirective field="email" headerText='Email' validationRules={validationRules}  ></ColumnDirective>
                                <ColumnDirective field='telephone' headerText='Telephone'  validationRules={orderidRules} ></ColumnDirective>
                                <ColumnDirective field='type' headerText='Type' validationRules={validationRules} ></ColumnDirective>
                                <ColumnDirective field='organisme' headerText="Nom D'organisme"   validationRules={validationRules} ></ColumnDirective>
                                <ColumnDirective field='description' headerText="Description"   validationRules={validationRules} ></ColumnDirective>
                                
                            </ColumnsDirective>
                            <Inject services={[Page, Toolbar, Edit, Search, Selection]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        </>
    );
}

