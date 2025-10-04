import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NET_CONFIG from '../../../configs/NetworkConfig'

const ip_address = NET_CONFIG.STATIC_IP;
const port_address = NET_CONFIG.PORT_ADDRESS;

const AdminHerdView = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get(`http://${ip_address}:${port_address}/`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
    }, [])
  return (
    <>
    <div className='container-fluid main'>
    <br />

    <Link to='/create' className='btn btn-success'>- Back</Link><span className=' col-md-12'></span>
    <Link to='/create' className='btn btn-success'>Create +</Link>
    <br />
          <br />
          {/* <!-- DataTales Example --> */}
                <div class="card shadow mb-4 ">
                        <div class="card-header glass py-3 dataTable">
                            <h6 class="m-0 font-weight-bold text-primary ">Breeds</h6>
                        </div>
                        <div class="card-body ">
                            <div className="table-responsive">
                            <div className="row">
                              <div className="col-sm-12 col-md-6">
                                <div class="dataTables_length" id="dataTable_length">
                                  <label>Show 
                                    <select name="dataTable_length" aria-controls="dataTable" className="custom-select  custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>
                                    </select> entries</label>
                                    </div></div>
                                    <div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter">
                                      <label>Search:
                                        <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable"/>
                                      </label>
                                    </div></div></div>




                                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Breed ID</th>
                                            <th>Breed Type</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Breed ID</th>
                                            <th>Breed Type</th>
                                            <th>Options</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                    {data.map((breed, breed_id) => {
                        return <tr key={breed_id}>
                            <td>{breed.breed_id}</td>
                            <td>{breed.breed_type}</td>
                            <td>
                            <Link to={`/read/${breed.breed_id}`}>more...</Link>
                            </td>

                            </tr>
                    })}
									    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </div>
    </>
  )
}

export default AdminHerdView