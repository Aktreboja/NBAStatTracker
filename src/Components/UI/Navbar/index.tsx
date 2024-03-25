'use client'
import { AppBar, Box, Typography, Toolbar, InputBase } from "@mui/material"
import { styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    
    backgroundColor: 'rgba(230,230,230, 0.7)',
    '&:hover': {
      backgroundColor: 'rgba(230,230,230, 0.5)',
    },
    transitionDuration: '100',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // @ts-ignore
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}))

const Navbar = () => {
    return (
        <Box sx=  {{flexGrow: 1}}>
            <CssBaseline />
            <AppBar component={'nav'} position="relative" color='transparent' sx={{width: '100vw', marginBottom: '20px'}}>
                <Toolbar sx = {{ display: {xs: 'flex', md: ''} , justifyContent: {xs: 'space-around', md: 'initial', position: 'relative'}}}>
                    <Link href = "/" style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}><Typography noWrap sx = {{typography: {sm: 'body1', md: 'h6' }}} >NBA Stat Tracker</Typography></Link>

                    {/* // todo: Add in once functionality is completed. */}
                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search.."
                            inputProps={{ 'aria-label': 'search'}} />
                    </Search> */}

                    {/* AutoComplete search results */}
                    {/* <Box sx = {{width: '600px', height: '400px', backgroundColor: 'rgb(200,200,200)', position: 'absolute', top: '80px', borderRadius: '0.5rem'}}>
                      // todo : upcoming work
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar