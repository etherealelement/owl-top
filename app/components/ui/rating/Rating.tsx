"use client";

import { FC, useState } from 'react';
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Rating} from "@mui/material";
import {RatingProps} from "@/app/components/ui/rating/Rating.props";

export const RatingItem: FC<RatingProps> = ({rating, isEditable = true}: RatingProps): JSX.Element => {
    const [value, setRating] = useState<number>(2);

    return <>
        <Box>
            <Typography component="legend"></Typography>
            <Rating
                name={isEditable ? "simple-controlled" : "read-only"}
                value={value}
                onChange={(e, number:number) => setRating(() => number) }
                sx={{
                    '& .MuiRating-iconFilled': {
                        color: '#7653FC',
                    },
                    '& .MuiRating-iconFocus': {
                        color: '#7653FC',
                    },
                    '& .MuiRating-iconHover': {
                        color: '#7653FC',
                    },
                }}

            />
        </Box>
    </>;
};