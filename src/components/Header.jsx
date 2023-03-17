import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

// import ButtonAdd from "../Button/Button";


const Header = ({handleCart, orderLen}) => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}>
              Shop
          </Typography>
          {/* <ButtonAdd/> */}
          <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Header;