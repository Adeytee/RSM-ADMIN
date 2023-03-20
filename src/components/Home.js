import React from 'react';
import BarChart from './Charts/BarChart';
import DonutChart from './Charts/DonutChart';
import SideBar from './SideBar';
import NavBar from './NavBar';

// import profilepic from './profilepic.png'

function Home() {
  return (
    <div className=''>
      <NavBar />
      <SideBar />
    <div class="main-content">
      <div class="container-fluid ">
      <div class="py-4">
      <div class="row mb-4">
          <div class="col-4">
            <div class="card header-pane-card">
              <div class="card-body">
                <div class="pane">
                  <p class="pane-title">CUSTOMERS</p>
                  <p class="pane-text mb-0">2,000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card header-pane-card">
              <div class="card-body">
                <div class="pane">
                  <p class="pane-title">AVAILABLE DISCOUNTS</p>
                  <p class="pane-text mb-0">125</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card header-pane-card">
              <div class="card-body">
                <div class="pane">
                  <p class="pane-title">TOTAL SALE ORDERS</p>
                  <p class="pane-text mb-0">32</p>
                </div>
              </div>
            </div>
          </div>
       </div>

        <div class="row mb-4">
          <div class="col-6">
            <div class="card stat-pane-card">
              <div class="card-header">
                <p class="header-title mb-0">
                  Number of Registered Customers by Express Code
                </p>
              </div>
              <div class="card-body py-0 px-0">
                <div class="body-pane-head px-3">
                  <div class="d-flex py-3">
                    <div class="form-input">
                      <div class="d-flex align-items-center py-1 w-100">
                        <div class="d-flex w-50">
                          <label for="startDate" class=" py-0 px-1 col-form-label pane-form-label">from</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="startDate"></input>
                          </div>
                        </div>
                        <div class="d-flex w-50">
                          <label for="endDate" class=" py-0 px-1 col-form-label pane-form-label">to</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="endDate"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="divide mx-2 my-0" />
                    <div class="d-flex">
                      <button class="btn btn-sm action-btn">
                        Search
                      </button>
                      <button class="btn btn-sm action-btn mx-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pane px-3 py-3">
                  <BarChart/>
                  <div class="text-center">
                    <p class="chart-title">Top Frontline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card stat-pane-card">
              <div class="card-header">
                <p class="header-title mb-0">
                  Number of Transactions by Express Code
                </p>
              </div>
              <div class="card-body py-0 px-0">
                <div class="body-pane-head px-3">
                  <div class="d-flex py-3">
                    <div class="form-input">
                      <div class="d-flex align-items-center py-1 w-100">
                        <div class="d-flex w-50">
                          <label for="startDate" class=" py-0 px-1 col-form-label pane-form-label">from</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="startDate"></input>
                          </div>
                        </div>
                        <div class="d-flex w-50">
                          <label for="endDate" class=" py-0 px-1 col-form-label pane-form-label">to</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="endDate"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="divide mx-2 my-0" />
                    <div class="d-flex">
                      <button class="btn btn-sm action-btn">
                        Search
                      </button>
                      <button class="btn btn-sm action-btn mx-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pane px-3 py-3">
                  <BarChart />
                  <div class="text-center">
                    <p class="chart-title">Top Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-6">
            <div class="card stat-pane-card">
              <div class="card-header">
                <p class="header-title mb-0">
                  Number of Transactions by Sector
                </p>
              </div>
              <div class="card-body py-0 px-0">
                <div class="body-pane-head px-3">
                  <div class="d-flex py-3">
                    <div class="form-input">
                      <div class="d-flex align-items-center py-1 w-100">
                        <div class="d-flex w-50">
                          <label for="startDate" class=" py-0 px-1 col-form-label pane-form-label">from</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="startDate"></input>
                          </div>
                        </div>
                        <div class="d-flex w-50">
                          <label for="endDate" class=" py-0 px-1 col-form-label pane-form-label">to</label>
                          <div class=" px-0 w-75">
                            <input type="date" class="form-control py-0 px-1 pane-form-input" id="endDate"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr class="divide mx-2 my-0" />
                    <div class="d-flex">
                      <button class="btn btn-sm action-btn">
                        Search
                      </button>
                      <button class="btn btn-sm action-btn mx-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pane px-3 py-3">
                  <BarChart />
                  <div class="text-center">
                    <p class="chart-title">Top Centre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card stat-pane-card">
              <div class="card-header">
                <p class="header-title mb-0">
                  Number of Customers by Birth Month
                </p>
              </div>
              <div class="card-body py-0 px-0">
                <div class="body-pane-head px-3">
                  <div class="d-flex py-3">
                    <div class="ms-auto">
                      <button class="btn btn-sm action-btn mx-2">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pane px-3 py-3">
                  <BarChart />
                  <div class="text-center">
                    <p class="chart-title">Top Centre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home