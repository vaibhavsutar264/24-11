import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import { tableCellClasses } from '@mui/material/TableCell'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export default function Billingtable() {
  return (
    <TableContainer component={Paper} className="table__Container">
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead className="TableHead">
          <TableRow>
            <StyledTableCell>
              <a href="/">
                <MoreVertIcon />
              </a>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>INVOICE NUMBER</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>CUSTOMER LE</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>ENTITY</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>PO NO.</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>STATUS</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>INVOICE AMOUNT</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>INVOICE ISSUED DATE</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>DUE DATE</span>
                <span>
                  <UnfoldMoreIcon />
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <div className="th_wrapper">
                <span>&nbsp;</span>
              </div>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="TableBody">
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
          <TableRow key="">
            <TableCell component="th" scope="row">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.272"
                  height="27.272"
                  viewBox="0 0 27.272 27.272"
                >
                  <g
                    id="Group_168524"
                    data-name="Group 168524"
                    transform="translate(-441.44 -269.75)"
                  >
                    <circle
                      id="Ellipse_646"
                      data-name="Ellipse 646"
                      cx="13"
                      cy="13"
                      r="13"
                      transform="translate(441.827 270.136)"
                      fill="#363f5e"
                      opacity="0.1"
                    />
                    <path
                      id="Path_13748"
                      data-name="Path 13748"
                      d="M92.746,9.363a13.4,13.4,0,1,0,9.461,3.925,13.387,13.387,0,0,0-9.461-3.925Zm0,25.618a12.246,12.246,0,1,1,8.645-3.587,12.232,12.232,0,0,1-8.645,3.587Z"
                      transform="translate(362.33 260.637)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13749"
                      data-name="Path 13749"
                      d="M339.488,170.258v-4.882a.577.577,0,0,0-1.154,0V170.5a.578.578,0,0,0,.169.408l3.69,3.69h0a.577.577,0,0,0,.816-.816Z"
                      transform="translate(116.165 112.889)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13750"
                      data-name="Path 13750"
                      d="M338.909,60.364a.577.577,0,0,0,.577-.577v-.878a.577.577,0,1,0-1.154,0v.878A.577.577,0,0,0,338.909,60.364Z"
                      transform="translate(116.167 214.091)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13751"
                      data-name="Path 13751"
                      d="M338.909,468.31a.577.577,0,0,0-.577.577v.878a.577.577,0,1,0,1.154,0v-.878A.577.577,0,0,0,338.909,468.31Z"
                      transform="translate(116.167 -175.61)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13752"
                      data-name="Path 13752"
                      d="M125.925,272.2h-.878a.577.577,0,0,0,0,1.154h.878a.577.577,0,1,0,0-1.154Z"
                      transform="translate(319.451 10.8)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                    <path
                      id="Path_13753"
                      data-name="Path 13753"
                      d="M535.029,273.352h.878a.577.577,0,0,0,0-1.154h-.878a.577.577,0,1,0,0,1.154Z"
                      transform="translate(-70.253 10.802)"
                      fill="#363f5e"
                      stroke="#363f5e"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              </a>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              AM2398756710
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Customer LE
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Tata Entity
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              CD098
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Unpaid
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              INR 50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              50,000.00
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              02-Sep-2021
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <ul className="actionButtons">
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_169122"
                      data-name="Group 169122"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21.803"
                      viewBox="0 0 21 21.803"
                    >
                      <defs>
                        <clipPath id="clipPath">
                          <rect
                            id="Rectangle_149222"
                            data-name="Rectangle 149222"
                            width="21"
                            height="21.803"
                            fill="#344857"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_169121"
                        data-name="Group 169121"
                        clipPath="url(#clipPath)"
                      >
                        <path
                          id="Path_13839"
                          data-name="Path 13839"
                          d="M16.959,21.8H4.039a.456.456,0,0,0-.077-.033A1.907,1.907,0,0,1,2.382,19.8c0-.539,0-1.078,0-1.617,0-.161.069-.368-.031-.471s-.308-.03-.469-.034A1.906,1.906,0,0,1,.006,15.8C0,13.214,0,10.632,0,8.05A1.782,1.782,0,0,1,.362,6.978a1.942,1.942,0,0,1,1.732-.805c.287.009.288,0,.288-.271,0-1.319,0-2.639,0-3.958A1.9,1.9,0,0,1,3.2.344,2.487,2.487,0,0,1,4.039,0h9.1a.513.513,0,0,0,.1.035,3.178,3.178,0,0,1,1.9,1Q16.438,2.417,17.746,3.8a3.212,3.212,0,0,1,.863,1.923c.015.146-.061.35.045.423s.3.026.454.029a1.9,1.9,0,0,1,1.884,1.889q.014,3.864,0,7.728a1.831,1.831,0,0,1-.979,1.636,2.079,2.079,0,0,1-1.21.241c-.15-.009-.19.038-.188.187.008.688.01,1.377,0,2.065a1.9,1.9,0,0,1-1.27,1.768c-.125.045-.256.076-.384.113M10.5,16.395h8.433c.555,0,.787-.232.787-.786q0-3.682,0-7.364c0-.56-.229-.792-.781-.792H2.053c-.541,0-.776.235-.776.775q0,3.693,0,7.385c0,.552.232.782.791.782H10.5M10.5,6.175q3.325,0,6.65,0c.157,0,.206-.035.2-.2a2,2,0,0,0-.561-1.341Q15.5,3.281,14.213,1.919A1.99,1.99,0,0,0,12.7,1.276q-4.154.005-8.308,0a.653.653,0,0,0-.732.735c0,1.313,0,2.626-.006,3.938,0,.2.057.228.236.228q3.3-.009,6.608,0m0,11.5c-2.209,0-4.418,0-6.627,0-.178,0-.223.046-.22.222.011.638,0,1.277,0,1.915a.65.65,0,0,0,.725.72H16.616a.651.651,0,0,0,.725-.72c0-.638-.006-1.277,0-1.915,0-.177-.043-.222-.22-.221-2.209.007-4.418,0-6.627,0"
                          transform="translate(0)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13840"
                          data-name="Path 13840"
                          d="M149.731,159.686q0-1.106,0-2.212c0-.525.239-.761.769-.761.4,0,.807-.006,1.21,0a2.245,2.245,0,0,1,2.159,1.35,3.51,3.51,0,0,1-.285,3.687,2.165,2.165,0,0,1-1.757.93c-.459.017-.92.022-1.379.02a.649.649,0,0,1-.71-.717c0-.766,0-1.531,0-2.3Zm1.276.005h0c0,.362,0,.723,0,1.085,0,.2-.086.471.033.6s.4.032.611.037a1.1,1.1,0,0,0,1.1-.717,2.489,2.489,0,0,0,.062-1.866,1.123,1.123,0,0,0-1.186-.836,3.978,3.978,0,0,1-.4,0c-.171-.018-.231.03-.226.215.014.5,0,.992,0,1.489"
                          transform="translate(-141.229 -147.812)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13841"
                          data-name="Path 13841"
                          d="M55.361,156.739a4.478,4.478,0,0,1,1.113.078,2,2,0,0,1-.445,3.93c-.219.009-.439.012-.658.007-.121,0-.158.042-.157.161.006.418,0,.837,0,1.255a.639.639,0,0,1-.636.7.651.651,0,0,1-.638-.7q-.006-2.362-.006-4.724a.643.643,0,0,1,.7-.7c.226,0,.453,0,.727,0m-.15,2h0c0,.2,0,.4,0,.6,0,.111.037.151.147.147.2-.007.4,0,.594-.008a.74.74,0,0,0,.724-.718.748.748,0,0,0-.732-.735c-.2-.007-.4,0-.594,0-.117-.005-.144.042-.14.149.007.191,0,.383,0,.574"
                          transform="translate(-50.874 -147.839)"
                          fill="#344857"
                        />
                        <path
                          id="Path_13842"
                          data-name="Path 13842"
                          d="M257.519,158.965q0-1.16,0-2.319a.643.643,0,0,1,.7-.716q.913,0,1.826,0a.643.643,0,0,1,.694.641.652.652,0,0,1-.686.634c-.361,0-.722.006-1.083,0-.129,0-.192.02-.184.171.013.255.011.511,0,.766-.005.135.059.147.166.146.326,0,.651-.007.977,0a.64.64,0,0,1,.422,1.128.64.64,0,0,1-.432.147c-.319,0-.637.006-.956,0-.139,0-.18.04-.178.18.008.525,0,1.05,0,1.574a.641.641,0,1,1-1.274-.01q0-1.17,0-2.34"
                          transform="translate(-242.897 -147.076)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.2"
                      height="22.167"
                      viewBox="0 0 20.2 22.167"
                    >
                      <g
                        id="_01_align_center"
                        data-name="01 align center"
                        transform="matrix(0.891, 0.454, -0.454, 0.891, 5.499, -1.362)"
                      >
                        <path
                          id="Path_13687"
                          data-name="Path 13687"
                          d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                          transform="translate(0)"
                          fill="#344857"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="actionButton__item">
                  <a href="/">
                    <svg
                      id="Group_168119"
                      data-name="Group 168119"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.378"
                      height="17.381"
                      viewBox="0 0 17.378 17.381"
                    >
                      <path
                        id="Path_13531"
                        data-name="Path 13531"
                        d="M472.458,421.715a1.019,1.019,0,0,1,.758.7,1.438,1.438,0,0,1,.036.4q0,4.427,0,8.855a.334.334,0,0,0,.03.222c.048-.045.093-.087.136-.13q1.02-1.019,2.04-2.038a.927.927,0,0,1,.951-.251.905.905,0,0,1,.677.711.959.959,0,0,1-.3.94q-1.076,1.071-2.147,2.147-.8.8-1.6,1.6a.976.976,0,0,1-1.517,0q-1.866-1.865-3.73-3.731a.971.971,0,0,1-.1-1.369.961.961,0,0,1,1.429-.031c.679.672,1.352,1.351,2.028,2.026.044.044.089.085.136.13a.327.327,0,0,0,.03-.221q0-4.444,0-8.889a.967.967,0,0,1,.766-1.053.112.112,0,0,0,.028-.019Z"
                        transform="translate(-463.599 -421.715)"
                        fill="#344857"
                      />
                      <path
                        id="Path_13532"
                        data-name="Path 13532"
                        d="M471.165,465.005c-.043.209-.078.42-.132.626a3.834,3.834,0,0,1-3.685,2.866q-4.869.014-9.739,0a3.848,3.848,0,0,1-3.82-3.816q0-.5,0-1a.966.966,0,1,1,1.932-.008,9.848,9.848,0,0,0,.032,1.3,1.9,1.9,0,0,0,1.831,1.587c1.832.012,3.665.005,5.5.006q2.078,0,4.157,0a1.928,1.928,0,0,0,1.941-1.482,4.148,4.148,0,0,0,.052-.895,4.156,4.156,0,0,1,.021-.694.963.963,0,0,1,1.862-.128l.05.142Z"
                        transform="translate(-453.787 -451.124)"
                        fill="#344857"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
