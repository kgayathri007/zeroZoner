const express=require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.json);

const{MongoClient, ObjectId}=require('mongodb');
let _usersCollectionName="user";

const uri='mongodb://localhost:27017/zeroZoner';
const client=new MongoClient(uri);
client.connect().then(()=>{
    console.log("connection Established");
});
    let _db=client.db();
    let _userCollection=_db.collection(_usersCollectionName);

    _userCollection.insertMany([
      { 
        name:'rajasekar',
        Email:"rajasekar0790@gmail.com",
        phone:3859327345,
        role:'Freelancer',
      },
      {
        name:'vinod',
        Email:"vinod0790@gmail.com",
        phone:9855932734,
        role:'investor',

      },
      {
         name:'Tirumal',
        Email:"tirumal0790@gmail.com",
        phone:9502327345,
        role:'Enterpreneur',
      }]).then(()=>{
    console.log("Inserted");
    });

    let _projectsCollectionName="projects";
    let _projectsCollection=_db.collection(_projectsCollectionName);

    _projectsCollection.insertMany([
        {
            Name:'DryFruits',
            Description:'Bank of Dry Fruits',
            FileRegardingConcept:'concept1'
        },
        {
          Name:'zeroZoner',
          Description:'Best Application',
          FileRegardingConcept:'concept2'
      },
      {
        Name:'EmployeeManagement',
        Description:'Bank of Dry Fruits',
        FileRegardingConcept:'concept1'
    }
    ]).then(()=>{
      console.log("records inserted");
    });

    let _userWallets="userWallets";
    let wallets=_db.collection(_userWallets);

    wallets.insertMany([
      {
        AccNo:1234567890,
        BankName:'Canara',
        Balance:20000,
        IFSC:'CNRB453647'

      },
      {
        AccNo:5678901234,
        BankName:'SBI',
        Balance:40000,
        IFSC:'SBI453647'

      },
      {
        AccNo:567263890,
        BankName:'ICICI',
        Balance:10000,
        IFSC:'ICICI453647'

      }]).then(()=>{
        console.log("wallets records inserted");
      });

      let user_transactions='Transctions';
      let _userTransctions=_db.collection(user_transactions);

      _userTransctions.insertMany([
        {
          TransactionId:1000324,
          paymentMode:'phonePey',
          Amount:1000,
          purpose:'Debit'

        },
        {
          TransactionId:121354,
          paymentMode:'paytm',
          Amount:2000,
          purpose:'credit'

        },
        {
          TransactionId:194532,
          paymentMode:'',
          Amount:1000,
          purpose:'Debit'

        }]).then(()=>{
          console.log("userTranscation records inserted");
        });

        //deleting one user record from users collection by using object_id
    let id=new ObjectId('65b245268937a07cf40b3bd7');
    _userCollection.deleteOne({_id:id}).then(()=>{
        console.log("user record Deleted");
    });
    //deleting many records from project collection by using name
    _projectsCollection.deleteMany({name:"zeroZoner"}).then(()=>{
        console.log("Project deleted");
    });
    //deleting many records from userWallets colletcion by using Bank_Name
    wallets.deleteMany({Bank_Name:"CANARA"}).then(()=>{
        console.log("Wallets deleted");
    });
  


    

app.listen(3000,()=>{
    console.log("server running on 3000");
});

