import React ,{useState,useEffect} from 'react'
import { Icon,  Menu, Table } from 'semantic-ui-react'
import JobAdvertiseService from '../services/jobAdvertiseService'

export default function JobList() {
 
  const [jobs, setJobs] = useState([])
 
  useEffect(() => {
    let jobAdvertiseService = new JobAdvertiseService();
    jobAdvertiseService.getJobsAdvertisements().then(result => setJobs(result.data.data))
  })
  

  return (
    <div>
        <Table celled>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Job Name</Table.HeaderCell>
        <Table.HeaderCell>Job Description</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Employer</Table.HeaderCell>
        <Table.HeaderCell>Job Position Count</Table.HeaderCell>
        <Table.HeaderCell>Application Start</Table.HeaderCell>
        <Table.HeaderCell>Deadline</Table.HeaderCell>
        <Table.HeaderCell>Min. Salary</Table.HeaderCell>
        <Table.HeaderCell>Max.Salary</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        jobs.map(jobs=>(
          <Table.Row>
        <Table.Cell>{jobs.jobTitle.title}</Table.Cell>
        <Table.Cell>{jobs.jobDescription}</Table.Cell>
        <Table.Cell>{jobs.city.cityName}</Table.Cell>
        <Table.Cell>{jobs.employer.companyName}</Table.Cell>
        <Table.Cell>{jobs.jobPositionCount}</Table.Cell>
        <Table.Cell>{jobs.applicationStart}</Table.Cell>
        <Table.Cell>{jobs.applicationDeadline}</Table.Cell>
        <Table.Cell>{jobs.maxSalary}</Table.Cell>
        <Table.Cell>{jobs.minSalary}</Table.Cell>
      </Table.Row>
        ))
      }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>

    </div>
  )
}
