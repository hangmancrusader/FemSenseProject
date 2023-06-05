import React from 'react';
import ReactMenu from '../Component/ReactMenu'
import Typography from '../Component/Typographyh1h2';
import ColorButtons from '../Component/Buttongetstart';
import TextMobileStepper from '../Component/TextMobileStepper';
import Card1 from '../Component/Card1'
import Card2 from '../Component/Card2'
import Card3 from '../Component/Card3'
import Card4 from '../Component/Card4'
import Card5 from '../Component/Card5'
import Card6 from '../Component/CustomCard'
import Footer from '../Component/Footer';
import ButtonLogin from '../Component/ButtonLogin';
import ButtonSignUp from '../Component/ButtonSignUp';
import CustomCard from '../Component/CustomCard';


function Homepage() {
  return (
    <div>
    {/* <ReactMenu /> */}
    <Typography />
    <ColorButtons />
    <TextMobileStepper />
{/*   
    // call API
    // loop 

    <Card id='' title='' image_url=''/>  */}
      <div>
      <CustomCard
        imageUrl="https://source.unsplash.com/JtX2OR6bNAE"
        sx={{ maxWidth: 600, backgroundColor: "#E4DADB", left:"100px", top:"2500px", position:"absolute"}}
        link="https://www.webmd.com/women/guide/vaginoplasty-and-labiaplasty-procedures"
        title="Vaginoplasty and Labiaplasty"
        description="In order to decide if you should consider vaginoplasty or labiaplasty, it's important to understand the difference between reconstructive surgery and cosmetic surgery."
      />
      <CustomCard
        imageUrl="https://source.unsplash.com/Av_NirIguEc"
        sx={{ maxWidth: 600, backgroundColor: "#E4DADB", left:"750px", top:"2500px", position:"absolute"}}
        link="https://www.healthline.com/health/womens-health/long-periods"
        title="Causes of long periods"
        description="Generally, a period lasts between three to seven days. A menstrual period that lasts longer than seven days is considered a long period."
      /> 
       <CustomCard
        imageUrl="https://source.unsplash.com/jAVlGc_mUW4"
        sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"1100px", top:"2000px", position:"absolute"}}
        link="https://www.everydayhealth.com/sexual-health/living-with/better-sex-through-intimacy/"
        title="Sex and Intimacy"
        description="Emotional intimacy can lead to better sexual experiences for many people, especially women."
      />
       <CustomCard
        imageUrl="https://source.unsplash.com/fhWNnHmW40Y"
        sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"750px", top:"2000px", position:"absolute"}}
        link="https://kidshealth.org/en/teens/irregular-periods.html"
        title="Irregular Period"
        description="Most girls get their first period between the ages of 10 and 15, but some get it earlier and some later."
      />
       <CustomCard
        imageUrl="https://source.unsplash.com/uFVPf9zh17U"
        sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"400px", top:"2000px", position:"absolute"}}
        link="https://www.bbc.com/future/article/20160630-the-enduring-enigma-of-female-desire"
        title="Mature Sexuality"
        description="Why have scientists been slow to understand women's sexuality, asks Rachel Nuwer."
      />
       <CustomCard
        imageUrl="https://source.unsplash.com/o1rq5GwVorY"
        sx={{ maxWidth: 300, backgroundColor: "#E4DADB", left:"50px", top:"2000px", position:"absolute"}}
        link="https://www.verywellfamily.com/what-maternity-leave-is-really-like-4054289"
        title="Maternity"
        description="Your days can start to feel extremely long and unorganized as you adjust to your new role as a mom..."
      />
      </div>    
   
    {/* <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />  */}
    <Footer />
    <ButtonLogin />
    <ButtonSignUp />
  </div>
  );
}

export default Homepage;