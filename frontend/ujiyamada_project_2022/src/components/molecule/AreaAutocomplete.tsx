import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type typeProps = {
    list: {label:string,id:number}[]
    label: string 
}

type UseStateType = {label:string,id:number} | null;

const AreaAutocomplete: React.FC <typeProps> = (props) => {
    const [area,setArea] = useState<UseStateType>();
    return(
        <Autocomplete
            disablePortal
            id="selectarea"
            value={area}
            options={props.list}
            onChange={(e,v)=>{setArea(v)}}
            sx={{minWidth:180, mx:'auto', bgcolor:'white', borderRadius:1}}
            renderInput={(params) => <TextField {...params} label={props.label}/>}
        />
    )
}

export default AreaAutocomplete;