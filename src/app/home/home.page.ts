import { Component } from '@angular/core';
import * as firebase from 'firebase'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ref=firebase.database().ref();
  pokemos:any=[]
  constructor(
    private alercotroller:AlertController

  ){
    //listar datos de la base
    this.ref.on('value',response=>{
      let datos=snapshotToArray(response)
        console.log("colll ",datos);
      this.pokemos=datos
    });

    //crear datos de la base
    // let insertar =this.ref.push();
    // insertar.set({name: 'Pichu'});

    //optener dato con key
    firebase.database().ref('-LYbU11j5J1NDm14xB42').on('value',response=>{
      let datos=snapshotToObject(response);
      console.log(datos);
    });

    let data={
      name:'combosquet'

    };
    //firebase.database().ref('-LYbU11j5J1NDm14xB42').update(data);
  }

  delete(pokemon:any){
    console.log(pokemon);
    firebase.database().ref(pokemon.key).remove();
  }

  async eli(pokemon){
    console.log("entra a eli")
    const alert= await this.alercotroller.create({
      header:'Eliminar pokemon',
    
      buttons:[{
        text:'cancelar',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('comfirm Cancel');
        }
      },{
        text:'Eliminar',
        role:'delete',
        handler:()=>{
          this.delete(pokemon);
        }
        
      }
    
    ]
     
    })
    alert.present();
  }


  async edit(pokemon){
    const alert=await this.alercotroller.create({
      header:'pokemon',
      inputs:[{
        name:'name',
        type:'text',
        placeholder:'Nombre',
        value:pokemon.name
      }],
      buttons:[{
        text:'cancelar',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('comfirm Cancel');
        }
      },{
        text:'OK',
        role:'update',
        handler:(data)=>{
          console.log('comfirm',data)
          firebase.database().ref(pokemon.key).update(data);
        }
        
      }
    
    ]
     
    })
    alert.present();
  }



  async add(){
    const alert=await this.alercotroller.create({
      header:'pokemon',
      inputs:[{
        name:'name',
        type:'text',
        placeholder:'Nombre',
        
      }],
      buttons:[{
        text:'cancelar',
        role:'cancel',
        cssClass:'secondary',
        handler:()=>{
          console.log('comfirm Cancel');
        }
      },{
        text:'OK',
        role:'create',
        handler:(data)=>{
          console.log('comfirm',data)

          let insertar =this.ref.push();
          insertar.set({name: data.name});
          
        }
        
      }
    
    ]
     
    })
    alert.present();
  }
}

export const snapshotToArray=snapshot=>{
  console.log("pppppp: ",snapshot);
  let returnArr =[]
  snapshot.forEach(childSnapshot => {
    let item=childSnapshot.val();
    item.key=childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;

}

export const snapshotToObject= snapshot=>{
  let item=snapshot.val();
  item.key=snapshot.key;

  return item;
}