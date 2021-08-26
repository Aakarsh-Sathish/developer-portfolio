import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary1,
            "&:hover": {
                
            },
        },
    }));

    const classes = useStyles();

    return (
        <div key={id} className={`experience-card ${classes.experienceCard}`}>
             <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                <img src={theme === 'light' ? eduImgWhite : eduImgBlack} alt="" />
            </div>
            <div className="experience-details">
                 <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                 <h4 style={{color: theme.secondary}}>{jobtitle}</h4>
                <h5 style={{color: theme.secondary1}}>{company}</h5>
            </div>
        </div>
    )
}

export default ExperienceCard