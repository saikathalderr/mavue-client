import React from "react";
import {Typography} from "@mui/material";

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <>
            <div>

                <Typography variant="h6" gutterBottom color="white">
                    {subtitle}
                </Typography>

                <Typography variant="h5" gutterBottom color="white" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
            </div>
        </>
    )
}

export default PageHeader