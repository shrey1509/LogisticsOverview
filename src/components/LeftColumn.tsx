import React from "react";
import {getBookingContent,getSpecialtiesContent,getContactsContent} from '../utility'
import AuthoritySection from './Authority/AuthoritySection'
import OverviewImages from './Images/OverviewImages'
import DetailsSection from "./Details/DetailsSection";
import Card from "./Card"
import OverviewSection from './OverviewSection'
import { SeparatedData } from "../types";

//get left separated data
const LeftColumn = ({overviewData}:{overviewData:SeparatedData["leftColumn"]}) => {
    return (
        <div className="overview-column">
            {/* Authority */}
            <AuthoritySection type={overviewData?.authority.type} status={overviewData?.authority.status} age={overviewData?.authority.age} />
            {/* Booking Review */}
            {overviewData?.booking.previouslyBooked?<Card titleContentPairs={[{title:null,content:getBookingContent(overviewData.booking)}]} classNames="card-first card-last"/>:""} 
            {/* Images */}
            {overviewData?.images.length&&overviewData?.images.length>0?<OverviewImages imageSources={overviewData.images} />:""} 
            {/* Specialties */}
            {overviewData?.specialtyTags.length&&overviewData?.specialtyTags.length>0?<OverviewSection title="Specialties" content={getSpecialtiesContent(overviewData.specialtyTags)} />:""} 
            {/* Details */}
            {overviewData?.details?<OverviewSection title="Details" content={<DetailsSection details={overviewData.details}/>} />:""}
            {/* Contacts */}
            {overviewData?.contacts.length&&overviewData?.contacts.length>0?<OverviewSection title="Contacts" content={getContactsContent(overviewData.contacts)} />:""}
        </div>
    );
}

export default LeftColumn;