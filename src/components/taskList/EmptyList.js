import React from 'react'
import EmptyImage from '../../empty_image.webp'
import Box from "@mui/material/Box";

const EmptyList = () => {
    return (

        <Box
            sx={{
                width: '100%',
                height: '90%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img

                src={EmptyImage}
                loading="lazy"
            />
        </Box>


    )
}
export default EmptyList