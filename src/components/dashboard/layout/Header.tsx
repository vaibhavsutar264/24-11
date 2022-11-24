import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Logo from '../../../assets/images/CPaaSLogo.png'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'

import Avatar from '@mui/material/Avatar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [language, setLanguage] = React.useState('')

  const handleChangelanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

  return (
    <>
      <div className="dashboard__navbar">
        <div className="dashboard__container">
          <Link className="logo" to="/">
            <img src={Logo} alt="CPAAS TCL" />
          </Link>
          <div className="right__elements">
            <div className="right__elementsItem search__group">
              <Paper
                component="form"
                className="search__form"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 478,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Products, Orders and Clients"
                  inputProps={{
                    'aria-label': 'Search Products, Orders and Clients',
                  }}
                />
                <IconButton
                  type="button"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
            <div className="right__elementsItem theme__toggle">
              <div className="toggle__wrapper">
                <button className="lightMode active">
                  <LightModeIcon />
                </button>
                <button className="darkMode">
                  <DarkModeIcon />
                </button>
              </div>
            </div>
            <div className="right__elementsItem language__selector">
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <Select
                  value={language}
                  onChange={handleChangelanguage}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <span>Language</span>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="right__elementsItem notification">
              <Badge badgeContent={4} color="warning">
                <NotificationsNoneIcon color="action" />
              </Badge>
            </div>
            <div className="right__elementsItem profile__setting">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                  marginRight: 0,
                  '& .MuiAvatar-root': {
                    fontSize: 12,
                  },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ width: 25, height: 25 }}
                />
                <span className="userName">Tushar Bodke</span>
                <ArrowDropDownIcon className="dropArrow" />
              </Button>
              <Menu
                className="profile__menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <div className="dropProfile__wrapper">
                    <div className="profile__picture">
                      <Avatar alt="Remy Sharp" src="" />
                    </div>
                    <div className="profile__content">
                      <p className="name">Tushar Bodke</p>
                      <p className="deg">Admin</p>
                      <p className="status">
                        Last Activity: 2 Aug, 2022 at 5:30pm
                      </p>
                    </div>
                  </div>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <a href="/" className="profile__dropLink">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.594"
                        height="20.6"
                        viewBox="0 0 20.594 20.6"
                      >
                        <path
                          id="Path_13737"
                          data-name="Path 13737"
                          d="M87.077,26.563H86.043a1.462,1.462,0,0,1-1.418-1.126l-.214-.874a8.212,8.212,0,0,1-2.56-1.181l-.816.4a1.459,1.459,0,0,1-1.77-.368l-.659-.771a1.459,1.459,0,0,1-.061-1.808l.522-.714a8.339,8.339,0,0,1-.5-1.4l-.89-.234a1.462,1.462,0,0,1-1.11-1.418V16.032a1.463,1.463,0,0,1,1.126-1.418l.874-.2a8.318,8.318,0,0,1,.576-1.542l-.512-.739a1.463,1.463,0,0,1,.106-1.808l.685-.774a1.465,1.465,0,0,1,1.782-.32l.8.419h0A8.15,8.15,0,0,1,84.4,8.563l.214-.877a1.462,1.462,0,0,1,1.424-1.123h1.034A1.463,1.463,0,0,1,88.5,7.683l.214.88a8.124,8.124,0,0,1,2.56,1.181l.8-.413a1.462,1.462,0,0,1,1.776.362l.669.79a1.466,1.466,0,0,1,.07,1.811l-.528.73h0a8.207,8.207,0,0,1,.506,1.386l.877.214a1.462,1.462,0,0,1,1.117,1.424v1.034a1.462,1.462,0,0,1-1.12,1.424l-.874.214a8.537,8.537,0,0,1-.579,1.533L94.5,21a1.459,1.459,0,0,1-.115,1.808l-.682.771a1.469,1.469,0,0,1-1.786.32l-.778-.416a8.152,8.152,0,0,1-2.422,1.078l-.23.89a1.463,1.463,0,0,1-1.408,1.11Zm-5.165-4.384a.566.566,0,0,1,.336.112A7.108,7.108,0,0,0,85,23.571a.551.551,0,0,1,.422.416l.285,1.19h0a.346.346,0,0,0,.336.266h1.034a.32.32,0,0,0,.32-.262l.3-1.206h0a.569.569,0,0,1,.422-.413,7.118,7.118,0,0,0,2.64-1.19.556.556,0,0,1,.608-.048l1.078.576a.342.342,0,0,0,.422-.074l.688-.771h0a.342.342,0,0,0,.029-.426L92.875,20.6a.567.567,0,0,1-.029-.589,7.11,7.11,0,0,0,.714-1.885.567.567,0,0,1,.416-.422l1.2-.294h0a.346.346,0,0,0,.266-.336V16.048a.345.345,0,0,0-.262-.336l-1.206-.294a.567.567,0,0,1-.416-.422,7.16,7.16,0,0,0-.64-1.77.56.56,0,0,1,.045-.589l.73-1h0a.343.343,0,0,0-.019-.426l-.682-.787a.339.339,0,0,0-.419-.086l-1.11.557a.553.553,0,0,1-.589-.054,7.081,7.081,0,0,0-2.746-1.28.566.566,0,0,1-.422-.416l-.294-1.2a.346.346,0,0,0-.32-.266h-1.05a.346.346,0,0,0-.336.266l-.294,1.219a.566.566,0,0,1-.422.413,7.129,7.129,0,0,0-2.624,1.181.553.553,0,0,1-.6.054l-1.1-.579a.352.352,0,0,0-.422.077l-.685.774a.352.352,0,0,0-.026.429l.707,1.018h0a.56.56,0,0,1,.032.589,7.129,7.129,0,0,0-.723,1.9.56.56,0,0,1-.416.422l-1.19.282a.346.346,0,0,0-.266.336v1.034a.349.349,0,0,0,.262.339l1.206.3h0a.557.557,0,0,1,.41.422,7.177,7.177,0,0,0,.64,1.77.56.56,0,0,1-.032.579l-.717.989a.342.342,0,0,0,.016.426l.662.79a.346.346,0,0,0,.419.09l1.117-.554h0a.57.57,0,0,1,.25-.058Zm4.653-2.1a3.52,3.52,0,1,1,2.489-1.031A3.52,3.52,0,0,1,86.565,20.083Zm0-5.91a2.394,2.394,0,1,0,1.691.7,2.4,2.4,0,0,0-1.691-.7Z"
                          transform="translate(-76.265 -6.263)"
                          fill="#092133"
                          stroke="#092133"
                          strokeWidth="0.6"
                          opacity="0.7"
                        />
                      </svg>
                    </span>
                    <span className="text">Setting</span>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <a href="/" className="profile__dropLink">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.594"
                        height="20.6"
                        viewBox="0 0 20.594 20.6"
                      >
                        <path
                          id="Path_13737"
                          data-name="Path 13737"
                          d="M87.077,26.563H86.043a1.462,1.462,0,0,1-1.418-1.126l-.214-.874a8.212,8.212,0,0,1-2.56-1.181l-.816.4a1.459,1.459,0,0,1-1.77-.368l-.659-.771a1.459,1.459,0,0,1-.061-1.808l.522-.714a8.339,8.339,0,0,1-.5-1.4l-.89-.234a1.462,1.462,0,0,1-1.11-1.418V16.032a1.463,1.463,0,0,1,1.126-1.418l.874-.2a8.318,8.318,0,0,1,.576-1.542l-.512-.739a1.463,1.463,0,0,1,.106-1.808l.685-.774a1.465,1.465,0,0,1,1.782-.32l.8.419h0A8.15,8.15,0,0,1,84.4,8.563l.214-.877a1.462,1.462,0,0,1,1.424-1.123h1.034A1.463,1.463,0,0,1,88.5,7.683l.214.88a8.124,8.124,0,0,1,2.56,1.181l.8-.413a1.462,1.462,0,0,1,1.776.362l.669.79a1.466,1.466,0,0,1,.07,1.811l-.528.73h0a8.207,8.207,0,0,1,.506,1.386l.877.214a1.462,1.462,0,0,1,1.117,1.424v1.034a1.462,1.462,0,0,1-1.12,1.424l-.874.214a8.537,8.537,0,0,1-.579,1.533L94.5,21a1.459,1.459,0,0,1-.115,1.808l-.682.771a1.469,1.469,0,0,1-1.786.32l-.778-.416a8.152,8.152,0,0,1-2.422,1.078l-.23.89a1.463,1.463,0,0,1-1.408,1.11Zm-5.165-4.384a.566.566,0,0,1,.336.112A7.108,7.108,0,0,0,85,23.571a.551.551,0,0,1,.422.416l.285,1.19h0a.346.346,0,0,0,.336.266h1.034a.32.32,0,0,0,.32-.262l.3-1.206h0a.569.569,0,0,1,.422-.413,7.118,7.118,0,0,0,2.64-1.19.556.556,0,0,1,.608-.048l1.078.576a.342.342,0,0,0,.422-.074l.688-.771h0a.342.342,0,0,0,.029-.426L92.875,20.6a.567.567,0,0,1-.029-.589,7.11,7.11,0,0,0,.714-1.885.567.567,0,0,1,.416-.422l1.2-.294h0a.346.346,0,0,0,.266-.336V16.048a.345.345,0,0,0-.262-.336l-1.206-.294a.567.567,0,0,1-.416-.422,7.16,7.16,0,0,0-.64-1.77.56.56,0,0,1,.045-.589l.73-1h0a.343.343,0,0,0-.019-.426l-.682-.787a.339.339,0,0,0-.419-.086l-1.11.557a.553.553,0,0,1-.589-.054,7.081,7.081,0,0,0-2.746-1.28.566.566,0,0,1-.422-.416l-.294-1.2a.346.346,0,0,0-.32-.266h-1.05a.346.346,0,0,0-.336.266l-.294,1.219a.566.566,0,0,1-.422.413,7.129,7.129,0,0,0-2.624,1.181.553.553,0,0,1-.6.054l-1.1-.579a.352.352,0,0,0-.422.077l-.685.774a.352.352,0,0,0-.026.429l.707,1.018h0a.56.56,0,0,1,.032.589,7.129,7.129,0,0,0-.723,1.9.56.56,0,0,1-.416.422l-1.19.282a.346.346,0,0,0-.266.336v1.034a.349.349,0,0,0,.262.339l1.206.3h0a.557.557,0,0,1,.41.422,7.177,7.177,0,0,0,.64,1.77.56.56,0,0,1-.032.579l-.717.989a.342.342,0,0,0,.016.426l.662.79a.346.346,0,0,0,.419.09l1.117-.554h0a.57.57,0,0,1,.25-.058Zm4.653-2.1a3.52,3.52,0,1,1,2.489-1.031A3.52,3.52,0,0,1,86.565,20.083Zm0-5.91a2.394,2.394,0,1,0,1.691.7,2.4,2.4,0,0,0-1.691-.7Z"
                          transform="translate(-76.265 -6.263)"
                          fill="#092133"
                          stroke="#092133"
                          strokeWidth="0.6"
                          opacity="0.7"
                        />
                      </svg>
                    </span>
                    <span className="text">Change Password</span>
                  </a>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <a href="/" className="profile__dropLink">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.594"
                        height="20.6"
                        viewBox="0 0 20.594 20.6"
                      >
                        <path
                          id="Path_13737"
                          data-name="Path 13737"
                          d="M87.077,26.563H86.043a1.462,1.462,0,0,1-1.418-1.126l-.214-.874a8.212,8.212,0,0,1-2.56-1.181l-.816.4a1.459,1.459,0,0,1-1.77-.368l-.659-.771a1.459,1.459,0,0,1-.061-1.808l.522-.714a8.339,8.339,0,0,1-.5-1.4l-.89-.234a1.462,1.462,0,0,1-1.11-1.418V16.032a1.463,1.463,0,0,1,1.126-1.418l.874-.2a8.318,8.318,0,0,1,.576-1.542l-.512-.739a1.463,1.463,0,0,1,.106-1.808l.685-.774a1.465,1.465,0,0,1,1.782-.32l.8.419h0A8.15,8.15,0,0,1,84.4,8.563l.214-.877a1.462,1.462,0,0,1,1.424-1.123h1.034A1.463,1.463,0,0,1,88.5,7.683l.214.88a8.124,8.124,0,0,1,2.56,1.181l.8-.413a1.462,1.462,0,0,1,1.776.362l.669.79a1.466,1.466,0,0,1,.07,1.811l-.528.73h0a8.207,8.207,0,0,1,.506,1.386l.877.214a1.462,1.462,0,0,1,1.117,1.424v1.034a1.462,1.462,0,0,1-1.12,1.424l-.874.214a8.537,8.537,0,0,1-.579,1.533L94.5,21a1.459,1.459,0,0,1-.115,1.808l-.682.771a1.469,1.469,0,0,1-1.786.32l-.778-.416a8.152,8.152,0,0,1-2.422,1.078l-.23.89a1.463,1.463,0,0,1-1.408,1.11Zm-5.165-4.384a.566.566,0,0,1,.336.112A7.108,7.108,0,0,0,85,23.571a.551.551,0,0,1,.422.416l.285,1.19h0a.346.346,0,0,0,.336.266h1.034a.32.32,0,0,0,.32-.262l.3-1.206h0a.569.569,0,0,1,.422-.413,7.118,7.118,0,0,0,2.64-1.19.556.556,0,0,1,.608-.048l1.078.576a.342.342,0,0,0,.422-.074l.688-.771h0a.342.342,0,0,0,.029-.426L92.875,20.6a.567.567,0,0,1-.029-.589,7.11,7.11,0,0,0,.714-1.885.567.567,0,0,1,.416-.422l1.2-.294h0a.346.346,0,0,0,.266-.336V16.048a.345.345,0,0,0-.262-.336l-1.206-.294a.567.567,0,0,1-.416-.422,7.16,7.16,0,0,0-.64-1.77.56.56,0,0,1,.045-.589l.73-1h0a.343.343,0,0,0-.019-.426l-.682-.787a.339.339,0,0,0-.419-.086l-1.11.557a.553.553,0,0,1-.589-.054,7.081,7.081,0,0,0-2.746-1.28.566.566,0,0,1-.422-.416l-.294-1.2a.346.346,0,0,0-.32-.266h-1.05a.346.346,0,0,0-.336.266l-.294,1.219a.566.566,0,0,1-.422.413,7.129,7.129,0,0,0-2.624,1.181.553.553,0,0,1-.6.054l-1.1-.579a.352.352,0,0,0-.422.077l-.685.774a.352.352,0,0,0-.026.429l.707,1.018h0a.56.56,0,0,1,.032.589,7.129,7.129,0,0,0-.723,1.9.56.56,0,0,1-.416.422l-1.19.282a.346.346,0,0,0-.266.336v1.034a.349.349,0,0,0,.262.339l1.206.3h0a.557.557,0,0,1,.41.422,7.177,7.177,0,0,0,.64,1.77.56.56,0,0,1-.032.579l-.717.989a.342.342,0,0,0,.016.426l.662.79a.346.346,0,0,0,.419.09l1.117-.554h0a.57.57,0,0,1,.25-.058Zm4.653-2.1a3.52,3.52,0,1,1,2.489-1.031A3.52,3.52,0,0,1,86.565,20.083Zm0-5.91a2.394,2.394,0,1,0,1.691.7,2.4,2.4,0,0,0-1.691-.7Z"
                          transform="translate(-76.265 -6.263)"
                          fill="#092133"
                          stroke="#092133"
                          strokeWidth="0.6"
                          opacity="0.7"
                        />
                      </svg>
                    </span>
                    <span className="text">Logout</span>
                  </a>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard__sidebar">
        <div className="sidebar__inner">
          <ul className="sidebar__list">
            <li className="list__item">
              <Link className="item__link active" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.139"
                    height="18.503"
                    viewBox="0 0 20.139 18.503"
                  >
                    <g
                      id="Group_168493"
                      data-name="Group 168493"
                      transform="translate(-35.577 -36.748)"
                    >
                      <path
                        id="dashboard_2_"
                        data-name="dashboard (2)"
                        d="M19.539,9.529A9.81,9.81,0,0,0,0,10.807a9.71,9.71,0,0,0,3.073,7.122,3.957,3.957,0,0,0,2.742,1.053H13.8a4.083,4.083,0,0,0,2.869-1.168A9.764,9.764,0,0,0,19.539,9.529Z"
                        transform="translate(35.827 36.018)"
                        fill="#092133"
                        opacity="0.2"
                      />
                      <path
                        id="dashboard_2_2"
                        data-name="dashboard (2)"
                        d="M19.539,9.529A9.81,9.81,0,0,0,0,10.807a9.71,9.71,0,0,0,3.073,7.122,3.957,3.957,0,0,0,2.742,1.053H13.8a4.083,4.083,0,0,0,2.869-1.168A9.764,9.764,0,0,0,19.539,9.529Zm-4.013,7.112a2.453,2.453,0,0,1-1.726.706H5.815A2.34,2.34,0,0,1,4.2,16.741a8.093,8.093,0,0,1-2.56-5.934,8.187,8.187,0,0,1,2.729-6.1A8.078,8.078,0,0,1,9.8,2.632a8.627,8.627,0,0,1,.96.054,8.17,8.17,0,0,1,4.767,13.96Zm-4.141-6.253a1.662,1.662,0,1,1-1.156-1.156L13.32,6.141A.817.817,0,1,1,14.476,7.3Z"
                        transform="translate(35.827 36.018)"
                        fill="#092133"
                        stroke="#092133"
                        strokeWidth="0.5"
                      />
                    </g>
                  </svg>
                </span>
                <span className="link__text">Dashboard</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.218"
                    height="18.5"
                    viewBox="0 0 16.218 18.5"
                  >
                    <g
                      id="Menu_ICon"
                      data-name="Menu ICon"
                      transform="translate(0.25 0.25)"
                      opacity="0.7"
                    >
                      <path
                        id="Vector_631_Stroke_"
                        data-name="Vector 631 (Stroke)"
                        d="M1.521,4.817V6.845A.761.761,0,0,1,0,6.845V4.817A4.817,4.817,0,0,1,4.817,0H10.9a4.817,4.817,0,0,1,4.817,4.817V6.845a.761.761,0,0,1-1.521,0V4.817a3.3,3.3,0,0,0-3.3-3.3H4.817A3.3,3.3,0,0,0,1.521,4.817Z"
                        transform="translate(0 10.394)"
                        fill="#092133"
                        stroke="#092133"
                        strokeWidth="0.5"
                      />
                      <path
                        id="Ellipse_132_Stroke_"
                        data-name="Ellipse 132 (Stroke)"
                        d="M6.592,4.056A2.535,2.535,0,1,0,4.056,6.592,2.535,2.535,0,0,0,6.592,4.056Z"
                        transform="translate(3.803 0)"
                        fill="#092133"
                        opacity="0.12"
                      />
                      <path
                        id="Ellipse_132_Stroke_2"
                        data-name="Ellipse 132 (Stroke)"
                        d="M4.056,8.113A4.056,4.056,0,1,1,8.113,4.056,4.061,4.061,0,0,1,4.056,8.113Zm0-6.592A2.535,2.535,0,1,0,6.592,4.056,2.538,2.538,0,0,0,4.056,1.521Z"
                        transform="translate(3.803)"
                        fill="#092133"
                        stroke="#092133"
                        strokeWidth="0.5"
                      />
                    </g>
                  </svg>
                </span>
                <span className="link__text">User Management</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.8"
                    height="18.21"
                    viewBox="0 0 20.8 18.21"
                  >
                    <g
                      id="noun-service-1318728"
                      transform="translate(-70.651 -49.998)"
                      opacity="0.7"
                    >
                      <path
                        id="Path_13645"
                        data-name="Path 13645"
                        d="M106.237,56.322a2.981,2.981,0,0,0-2.972-2.972h-3.4v-.828A2.129,2.129,0,0,0,97.745,50.4H94.73a2.129,2.129,0,0,0-2.123,2.123v.807h-3.4A2.981,2.981,0,0,0,86.237,56.3v8.535a2.981,2.981,0,0,0,2.972,2.972h14.034a2.981,2.981,0,0,0,2.972-2.972V56.322Z"
                        transform="translate(-15.185)"
                        fill="#092133"
                        opacity="0.1"
                      />
                      <path
                        id="Path_13735"
                        data-name="Path 13735"
                        d="M106.237,56.322a2.981,2.981,0,0,0-2.972-2.972h-3.4v-.828A2.129,2.129,0,0,0,97.745,50.4H94.73a2.129,2.129,0,0,0-2.123,2.123v.807h-3.4A2.981,2.981,0,0,0,86.237,56.3v8.535a2.981,2.981,0,0,0,2.972,2.972h14.034a2.981,2.981,0,0,0,2.972-2.972V56.322Zm-5.1-2.123v12.76H91.333V54.2Zm-7.686-1.677a1.278,1.278,0,0,1,1.274-1.274h3.015a1.278,1.278,0,0,1,1.274,1.274v.807H93.456ZM87.086,64.835V56.322A2.129,2.129,0,0,1,89.21,54.2h1.274v12.76H89.209a2.129,2.129,0,0,1-2.123-2.123Zm18.3,0a2.129,2.129,0,0,1-2.123,2.123h-1.274V54.2h1.274a2.129,2.129,0,0,1,2.123,2.123Z"
                        transform="translate(-15.186)"
                        fill="#092133"
                        stroke="#092133"
                        strokeWidth="0.8"
                      />
                    </g>
                  </svg>
                </span>
                <span className="link__text">Services</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.8"
                    height="18.21"
                    viewBox="0 0 20.8 18.21"
                  >
                    <g
                      id="noun-service-1318728"
                      transform="translate(-70.651 -49.998)"
                      opacity="0.7"
                    >
                      <path
                        id="Path_13645"
                        data-name="Path 13645"
                        d="M106.237,56.322a2.981,2.981,0,0,0-2.972-2.972h-3.4v-.828A2.129,2.129,0,0,0,97.745,50.4H94.73a2.129,2.129,0,0,0-2.123,2.123v.807h-3.4A2.981,2.981,0,0,0,86.237,56.3v8.535a2.981,2.981,0,0,0,2.972,2.972h14.034a2.981,2.981,0,0,0,2.972-2.972V56.322Z"
                        transform="translate(-15.185)"
                        fill="#092133"
                        opacity="0.1"
                      />
                      <path
                        id="Path_13735"
                        data-name="Path 13735"
                        d="M106.237,56.322a2.981,2.981,0,0,0-2.972-2.972h-3.4v-.828A2.129,2.129,0,0,0,97.745,50.4H94.73a2.129,2.129,0,0,0-2.123,2.123v.807h-3.4A2.981,2.981,0,0,0,86.237,56.3v8.535a2.981,2.981,0,0,0,2.972,2.972h14.034a2.981,2.981,0,0,0,2.972-2.972V56.322Zm-5.1-2.123v12.76H91.333V54.2Zm-7.686-1.677a1.278,1.278,0,0,1,1.274-1.274h3.015a1.278,1.278,0,0,1,1.274,1.274v.807H93.456ZM87.086,64.835V56.322A2.129,2.129,0,0,1,89.21,54.2h1.274v12.76H89.209a2.129,2.129,0,0,1-2.123-2.123Zm18.3,0a2.129,2.129,0,0,1-2.123,2.123h-1.274V54.2h1.274a2.129,2.129,0,0,1,2.123,2.123Z"
                        transform="translate(-15.186)"
                        fill="#092133"
                        stroke="#092133"
                        strokeWidth="0.8"
                      />
                    </g>
                  </svg>
                </span>
                <span className="link__text">SMS</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="20"
                    viewBox="0 0 15 20"
                  >
                    <g
                      id="Group_168329"
                      data-name="Group 168329"
                      transform="translate(-47 -369)"
                      opacity="0.7"
                    >
                      <g id="receipt" transform="translate(47 369)">
                        <path
                          id="Path_13686"
                          data-name="Path 13686"
                          d="M13.833,0H7.167A4.172,4.172,0,0,0,3,4.167v15a.833.833,0,0,0,1.3.687l1.755-1.2,1.755,1.2a.833.833,0,0,0,.942,0l1.75-1.2,1.75,1.2a.833.833,0,0,0,.942,0l1.75-1.2,1.75,1.2a.833.833,0,0,0,1.3-.687v-15A4.172,4.172,0,0,0,13.833,0Z"
                          transform="translate(-3)"
                          fill="#092133"
                          opacity="0.1"
                        />
                      </g>
                      <g
                        id="receipt-2"
                        data-name="receipt"
                        transform="translate(47 369)"
                      >
                        <path
                          id="Path_13686-2"
                          data-name="Path 13686"
                          d="M13.833,0H7.167A4.172,4.172,0,0,0,3,4.167v15a.833.833,0,0,0,1.3.687l1.755-1.2,1.755,1.2a.833.833,0,0,0,.942,0l1.75-1.2,1.75,1.2a.833.833,0,0,0,.942,0l1.75-1.2,1.75,1.2a.833.833,0,0,0,1.3-.687v-15A4.172,4.172,0,0,0,13.833,0Zm2.5,17.583-.917-.627a.833.833,0,0,0-.943,0l-1.75,1.2-1.75-1.2a.833.833,0,0,0-.942,0l-1.75,1.2-1.75-1.2a.833.833,0,0,0-.941,0l-.923.627V4.167a2.5,2.5,0,0,1,2.5-2.5h6.667a2.5,2.5,0,0,1,2.5,2.5Z"
                          transform="translate(-3)"
                          fill="#092133"
                        />
                        <rect
                          id="Rectangle_149053"
                          data-name="Rectangle 149053"
                          width="8.265"
                          height="1.837"
                          rx="0.918"
                          transform="translate(3.673 6.429)"
                          fill="#092133"
                        />
                        <rect
                          id="Rectangle_149054"
                          data-name="Rectangle 149054"
                          width="6.429"
                          height="1.837"
                          rx="0.918"
                          transform="translate(3.673 10.102)"
                          fill="#092133"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="link__text">Billing Invoice</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
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
                      opacity="0.7"
                    >
                      <path
                        id="Path_13687"
                        data-name="Path 13687"
                        d="M14.25,0h-3V.75a1.5,1.5,0,1,1-3,0V0h-3A2.25,2.25,0,0,0,3,2.25V18H8.25v-.75a1.5,1.5,0,0,1,3,0V18H16.5V2.25A2.25,2.25,0,0,0,14.25,0ZM12.655,16.5a3,3,0,0,0-5.811,0H4.5V12.75H6.75v-1.5H4.5v-9a.75.75,0,0,1,.75-.75H6.845a3,3,0,0,0,5.811,0H14.25a.75.75,0,0,1,.75.75v9H12.75v1.5H15V16.5Z"
                        transform="translate(0)"
                        fill="#092133"
                      />
                    </g>
                  </svg>
                </span>
                <span className="link__text">Tickets</span>
              </Link>
            </li>
            <li className="list__item">
              <Link className="item__link" to="">
                <span className="link__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.594"
                    height="20.6"
                    viewBox="0 0 20.594 20.6"
                  >
                    <path
                      id="Path_13737"
                      data-name="Path 13737"
                      d="M87.077,26.563H86.043a1.462,1.462,0,0,1-1.418-1.126l-.214-.874a8.212,8.212,0,0,1-2.56-1.181l-.816.4a1.459,1.459,0,0,1-1.77-.368l-.659-.771a1.459,1.459,0,0,1-.061-1.808l.522-.714a8.339,8.339,0,0,1-.5-1.4l-.89-.234a1.462,1.462,0,0,1-1.11-1.418V16.032a1.463,1.463,0,0,1,1.126-1.418l.874-.2a8.318,8.318,0,0,1,.576-1.542l-.512-.739a1.463,1.463,0,0,1,.106-1.808l.685-.774a1.465,1.465,0,0,1,1.782-.32l.8.419h0A8.15,8.15,0,0,1,84.4,8.563l.214-.877a1.462,1.462,0,0,1,1.424-1.123h1.034A1.463,1.463,0,0,1,88.5,7.683l.214.88a8.124,8.124,0,0,1,2.56,1.181l.8-.413a1.462,1.462,0,0,1,1.776.362l.669.79a1.466,1.466,0,0,1,.07,1.811l-.528.73h0a8.207,8.207,0,0,1,.506,1.386l.877.214a1.462,1.462,0,0,1,1.117,1.424v1.034a1.462,1.462,0,0,1-1.12,1.424l-.874.214a8.537,8.537,0,0,1-.579,1.533L94.5,21a1.459,1.459,0,0,1-.115,1.808l-.682.771a1.469,1.469,0,0,1-1.786.32l-.778-.416a8.152,8.152,0,0,1-2.422,1.078l-.23.89a1.463,1.463,0,0,1-1.408,1.11Zm-5.165-4.384a.566.566,0,0,1,.336.112A7.108,7.108,0,0,0,85,23.571a.551.551,0,0,1,.422.416l.285,1.19h0a.346.346,0,0,0,.336.266h1.034a.32.32,0,0,0,.32-.262l.3-1.206h0a.569.569,0,0,1,.422-.413,7.118,7.118,0,0,0,2.64-1.19.556.556,0,0,1,.608-.048l1.078.576a.342.342,0,0,0,.422-.074l.688-.771h0a.342.342,0,0,0,.029-.426L92.875,20.6a.567.567,0,0,1-.029-.589,7.11,7.11,0,0,0,.714-1.885.567.567,0,0,1,.416-.422l1.2-.294h0a.346.346,0,0,0,.266-.336V16.048a.345.345,0,0,0-.262-.336l-1.206-.294a.567.567,0,0,1-.416-.422,7.16,7.16,0,0,0-.64-1.77.56.56,0,0,1,.045-.589l.73-1h0a.343.343,0,0,0-.019-.426l-.682-.787a.339.339,0,0,0-.419-.086l-1.11.557a.553.553,0,0,1-.589-.054,7.081,7.081,0,0,0-2.746-1.28.566.566,0,0,1-.422-.416l-.294-1.2a.346.346,0,0,0-.32-.266h-1.05a.346.346,0,0,0-.336.266l-.294,1.219a.566.566,0,0,1-.422.413,7.129,7.129,0,0,0-2.624,1.181.553.553,0,0,1-.6.054l-1.1-.579a.352.352,0,0,0-.422.077l-.685.774a.352.352,0,0,0-.026.429l.707,1.018h0a.56.56,0,0,1,.032.589,7.129,7.129,0,0,0-.723,1.9.56.56,0,0,1-.416.422l-1.19.282a.346.346,0,0,0-.266.336v1.034a.349.349,0,0,0,.262.339l1.206.3h0a.557.557,0,0,1,.41.422,7.177,7.177,0,0,0,.64,1.77.56.56,0,0,1-.032.579l-.717.989a.342.342,0,0,0,.016.426l.662.79a.346.346,0,0,0,.419.09l1.117-.554h0a.57.57,0,0,1,.25-.058Zm4.653-2.1a3.52,3.52,0,1,1,2.489-1.031A3.52,3.52,0,0,1,86.565,20.083Zm0-5.91a2.394,2.394,0,1,0,1.691.7,2.4,2.4,0,0,0-1.691-.7Z"
                      transform="translate(-76.265 -6.263)"
                      fill="#092133"
                      stroke="#092133"
                      strokeWidth="0.6"
                      opacity="0.7"
                    />
                  </svg>
                </span>
                <span className="link__text">Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <button type="button" className="sidebarToggle">
          <KeyboardDoubleArrowLeftIcon />
        </button>
      </div>
    </>
  )
}
