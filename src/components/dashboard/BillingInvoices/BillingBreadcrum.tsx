import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export const BillingBreadcrum = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dashboard
    </Link>,
    <Typography key="3" color="text.primary">
      Billing Invoices
    </Typography>,
  ]
  return (
    <div className="content__header">
      <div className="content__breadcrum">
        <Stack spacing={2} className="breadcrum-stack">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <h3 className="content_pageTitle">Billing Invoices</h3>
      </div>
      <div className="right__elementsItem search__group">
        <Paper
          component="form"
          className="search__form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 350,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Products, Orders and Clients"
            inputProps={{
              'aria-label': 'Search Products, Orders and Clients',
            }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  )
}
