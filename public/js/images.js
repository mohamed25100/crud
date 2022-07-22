window.onload = () => {
    // gestion des buttons "Supprimer"
    let links = document.querySelectorAll("[data-delete]")
    //on boucle sur links;
    for(link of links){
        link.addEventListener("click", function(e){
            //On empeche la navigation  
            e.preventDefault()

            // on demande confirmation
            if(confirm("Voulez-vous supprimer cette image ?")){
                // on envie une requete vers le href du lien avec la methode DELETE
                fetch(this.getAttribute("href"),{
                    method: "DELETE",
                    headers:{
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"_token": this.dataset.token})
                }).then(
                    //on recuperele reponse JSON
                    response=> response.json()
                ).then(data => {
                     if(data.success)
                        this.parentElement.remove()
                     else 
                        alert(data.error)
                }).catch(e => alert(e));
            }
        })
    }
}