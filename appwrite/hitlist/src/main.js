import dotenv from 'dotenv';
dotenv.config();
import './style.css';
import {Client, Databases, ID} from "appwrite";

const client = new Client();
const databases = new Databases(client);

const PROJECT_ID = process.env.PROJECT_ID;
const DATABASE_ID = process.env.DATABASE_ID;
const COLLECTION_ID = process.env.COLLECTION_ID;

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(PROJECT_ID)

const form = document.querySelector('form');

form.addEventListener('submit', addJob);

function addJob(e){
  e.preventDefault();
  const job = databases.
    createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        'company-name': e.target.companyName.value,
        'date-added': e.target.date.value,
        'role': e.target.role.value,
        'location': e.target.location.value,
        'position-type': e.target.positionType.value,
        'source': e.target.source.value
      }
    )
    job.then(response => {
      addJobsToDOM();
      console.log(response);
    }, error => {
      console.log(error);
    })
  form.reset();
}

async function addJobsToDOM(){
  let response = await databases.listDocuments(
    '67afcf14000716f3e97f',
    '67afcf2900365e6dfa8c',
  )
  console.log(response);
  response.documents.forEach(job => {
    const li = document.createElement('li');
    li.textContent = `${job['company-name']}`;
    document.querySelector('ul').appendChild(li);
  })
}



// export const account = new Account(client);
// setupCounter(document.querySelector('#counter'))
