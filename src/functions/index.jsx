//  repartition par marchandise
 export  function repartitionNaviresParMarchandises(data,nomPort) {
    let result = {};
    let total=0;
    
    data.forEach(obj => {
        
      if (obj.LIB_PORT.includes(nomPort) || nomPort==="") {
        let marchandise = obj.LIBELLE_MARCHANDISE;
        total++;
        if (!result[marchandise]) {
          result[marchandise] = 0;
        }
        
        result[marchandise]++;
      }
    });
    let tableauResultat = Object.keys(result).map(marchandise => {
      return {
        "x": marchandise,
        "pourcentage": Math.floor(result[marchandise]*100/total+1)
      };
    });
    tableauResultat.sort((a, b) => b.pourcentage - a.pourcentage);
    return tableauResultat.slice(0, 10);
  }
  

  // repartition par destinataires
  export  function repartitionNaviresParDestinataires(data,nomPort) {
    let result = {};
    let total=0;
    let port=new Set();
    
    data.forEach(obj => {
      port.add(obj.LIB_PORT);
      if (obj.LIB_PORT.includes(nomPort) || nomPort==="" ) {
        let destinataire = obj.LIBELLE_DESTINATAIRE;
        total++;
        if (!result[destinataire]) {
          result[destinataire] = 0;
        }
        
        result[destinataire]++;
      }
    });
    console.log(port);
    let tableauResultat = Object.keys(result).map(destinataire => {
      return {
        "x": destinataire,
        "pourcentage": Math.floor(result[destinataire]*100/total+1)
      };
    });
    tableauResultat.sort((a, b) => b.pourcentage - a.pourcentage);
    return tableauResultat.slice(0, 10);
  } 




// repartition par mois
  export  function repartitionNaviresParMois(data,nomPort) {
    let result = {};
    let total=0;
    
    data.forEach(obj => {
        
      if ((obj.LIB_PORT.includes(nomPort) || nomPort==="" )&& obj.annee==2021) {
        let mois = obj.mois;
        total++;
        if (!result[mois]) {
          result[mois] = 0;
        }
        
        result[mois]++;
      }
    });
    let tableauResultat = Object.keys(result).map(mois => {
      return {
        "x": mois,
        "pourcentage": Math.floor(result[mois]*100/total+1)
      };
    });
    
    return tableauResultat;
  } 


  //moyenne delais d'attente par mois 

  export function moyenneDelaiAttenteParMois(tableau,nomPort) {
    let moyennes = {}; // un objet qui stockera les moyennes par mois
    let compteur = {}; // un objet qui comptera le nombre d'enregistrements par mois
  
    // boucle sur chaque objet du tableau
    for (let i = 0; i < tableau.length; i++) {
      let enregistrement = tableau[i];
      let mois = enregistrement.mois;
      let delaiAttente = enregistrement.delai_attente_h;
  
      // si c'est la première fois qu'on traite ce mois, initialise les compteurs à 0
      if (enregistrement.LIB_PORT.includes(nomPort) || nomPort==="" )
      {if (!moyennes[mois] ) {
          moyennes[mois] = 0;
          compteur[mois] = 0;
        }
    
        // ajoute le delai d'attente à la moyenne et incrémente le compteur
        moyennes[mois] += delaiAttente;
        compteur[mois]++;
      }
    }
  
    // calcule la moyenne pour chaque mois et stocke le résultat dans un tableau d'objets
    let resultats = [];
    for (let mois in moyennes) {
      let moyenne = moyennes[mois] / compteur[mois];
      resultats.push({ x: mois, y:Math.floor( moyenne) });
    }
  
    return resultats;
  }



    //moyenne delais d'attente par mois 

    export function moyenneDelaiAttenteParMarchandises(tableau,nomPort) {
      let moyennes = {}; // un objet qui stockera les moyennes par mois
      let compteur = {}; // un objet qui comptera le nombre d'enregistrements par mois
    
      // boucle sur chaque objet du tableau
      for (let i = 0; i < tableau.length; i++) {
        let enregistrement = tableau[i];
        let marchandise = enregistrement.LIBELLE_MARCHANDISE;
        let delaiAttente = enregistrement.delai_attente_h;
    
        
        // si c'est la première fois qu'on traite ce mois, initialise les compteurs à 0
        if (enregistrement.LIB_PORT.includes(nomPort) || nomPort===""){
         
          if (!moyennes[marchandise]) {
            moyennes[marchandise] = 0;
            compteur[marchandise] = 0;
          }
      
          // ajoute le delai d'attente à la moyenne et incrémente le compteur
          moyennes[marchandise] += delaiAttente;
          compteur[marchandise]++;
        }
      }
    
      // calcule la moyenne pour chaque mois et stocke le résultat dans un tableau d'objets
      let resultats = [];
      for (let marchandise in moyennes) {
        let moyenne = moyennes[marchandise] / compteur[marchandise];
        resultats.push({ x: marchandise, y:Math.floor( moyenne) });
      }
      resultats.sort((a, b) => b.y - a.y);
      return resultats.slice(0, 10);
    }



    export function moyenneDelaiAttenteParDestinataires(tableau,nomPort) {
      let moyennes = {}; // un objet qui stockera les moyennes par mois
      let compteur = {}; // un objet qui comptera le nombre d'enregistrements par mois
    
      // boucle sur chaque objet du tableau
      for (let i = 0; i < tableau.length; i++) {
        let enregistrement = tableau[i];
        let destinataire = enregistrement.LIBELLE_DESTINATAIRE;
        let delaiAttente = enregistrement.delai_attente_h;
    
        if (enregistrement.LIB_PORT.includes(nomPort) || nomPort===""){ 
          // si c'est la première fois qu'on traite ce mois, initialise les compteurs à 0
          if (!moyennes[destinataire]) {
            moyennes[destinataire] = 0;
            compteur[destinataire] = 0;
          }
      
          // ajoute le delai d'attente à la moyenne et incrémente le compteur
          moyennes[destinataire] += delaiAttente;
          compteur[destinataire]++;
        }
      }
      // calcule la moyenne pour chaque mois et stocke le résultat dans un tableau d'objets
      let resultats = [];
      for (let destinataire in moyennes) {
        let moyenne = moyennes[destinataire] / compteur[destinataire];
        resultats.push({ x: destinataire, y:Math.floor( moyenne) });
      }
      return resultats;
    
    }
  