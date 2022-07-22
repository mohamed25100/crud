# readme 
## tache
- crud 
- page anonces 
- page show
- loading-page

## info developpeur
- php bin/console make:entity
- Class name of the entity to create or update (e.g. GrumpyElephant):
- Class => Annonces
- property => title => type => string255 => null? no
- property => content => type => text => null? no
- Class => Image => 
- property => name => type => string255 => null ? no 
- property => annonce => relation with Annonces =>  relation type => ManyToOne => Each Image relates to (has) one Annonces. && Each Annonces can relate to (can have) many Image objects 
- Is the Image.annonce property allowed to be null (nullable)? (yes/no) [yes]:
- no
-  Do you want to add a new property to Annonces so that you can access/update Image objects from it - e.g. $annonces->getImages()? (yes/no) [yes]: >
- A new property will also be added to the Annonces class so that you can access the related Image objects from it.
- New field name inside Annonces [images]: >
- Do you want to activate orphanRemoval on your relationship?
 A Image is "orphaned" when it is removed from its related Annonces.
 e.g. $annonces->removeImage($image)
 
- NOTE: If a Image may *change* from one Annonces to another, answer "no".

- Do you want to automatically delete orphaned App\Entity\Image objects (orphanRemoval)? (yes/no) [no]:
- > yes
- Success! 
- php bin/console make:migration
- php bin/console doctrine:migrations:migrate