import API from './axios'
import { IEmployee } from '../types/employee.type'


class EmployeeService {
    getAll(): Promise<{ data: IEmployee[] }> {
        return API.get('/employees')
    }
    get(params: { id: number }): Promise<{ data: IEmployee }> {
        return API.get(`/employees/${params.id}`)
    }
}


export default new EmployeeService()