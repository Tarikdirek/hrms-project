import React ,{useState,useEffect} from 'react'
import { Input, Menu } from 'semantic-ui-react'
import EmployerNameService from '../services/employerNameService'


export default function Categories() {
 
  const [employer, setEmployer] = useState([])
 
  useEffect(() => {
    let employerNameService = new EmployerNameService();
    employerNameService.getEmployerName().then(result => setEmployer(result.data.data));
  })
  

  return (
    <div>
      <Menu size='large' vertical>
       {
          employer.map(employer =>(
             <Menu.Item
          name={employer.companyName}
        >
          {employer.companyName}
        </Menu.Item>
          ))
       }

       
        <Menu.Item>
          <Input icon='search' placeholder='Search employer...' />
        </Menu.Item>
      </Menu>
    </div>
  )
}
