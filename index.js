#!/usr/bin/env node

let figlet = require('figlet');
const { getCode, getName } = require('country-list');
const axios = require('axios').default;
const chalk = require('chalk');

let getYear= Number(process.argv[2]);
let getCountry = process.argv[3];
let countryCode= getCode(getCountry);

// if (process.argv[4]){
//     getCountry=`${process.argv[2]} ${process.argv[3]}`;
//     getYear=`${process.argv[4]}`;
// }
console.log(getCountry);

const getHolidays = async(setyear,setcountry)=>{
    try{
        
        const response = await axios.get(`https://date.nager.at/Api/v2/PublicHolidays/${setyear}/${setcountry}`);
        // const response = await axios.get(`https://date.nager.at/Api/v2/AvailableCountries`);
        response.data.forEach(holiday => {
            console.log(`${chalk.yellow(holiday.name)} - ${chalk.blue(holiday.date)}`);
        });
    }catch(error){
        console.error(error);
    }

}
getHolidays(getYear,countryCode);



 
figlet(`Welcome to ${countryCode} !!`, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});