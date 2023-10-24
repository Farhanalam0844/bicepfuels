import React, { useEffect, useState } from 'react'
import OnSeriousMassGainer from '../Products/ON serious mass gainer.jpg'
import RussianBear1000 from '../Products/russian bear 10000.jpg'
import ArnoldIronMass from '../Products/arnold iron mass 1.jpg'
import DymatizeSuper from '../Products/dymatize-super-mass-gainer 2lb-.jpg'
import MassTechand1Bottle from '../Products/muscle tech extreme 2000 by muscletech.jpg'
import AnabolicMassGainer from '../Products/anabolic mass gainer.jpg'
import UniversalGainFast from '../Products/unvieresal gain fast.jpg'
//import WheyProteinGold from '../Products/On whey protein.jpg'
import innerArmourHardMass from '../Products/inner armour hard mass.jpg'
import nitroTechProtein from '../Products/nitrol tech protein.jpg'
import AnabolicMassGainer3kg from '../Products/anabolic mass gainer 3kg.jpg'
import LabradaIsoWhey from '../Products/labrada iso whey.jpg'
import DymatizeIsoWhey from '../Products/dymatize iso whey.jpg'
import carnivorMassBisSteer1250 from '../Products/carnivor mass bus streer 1250.jpg'
import cellTechCreatineMonohydrate from '../Products/cell tech creatine by muscletech.jpg'
import WheyProteinGoldStandard from '../Products/gold standard whey protein .jpg'
import CriticalMassGainerByAppliedNutrition from '../Products/Critical mass gainer by AppliedNutrition.jpg'
import goldSuperMassByKevenlebroune from '../Products/gold super mass by kevenlebroune.jpg'
import RcKingMass from '../Products/king mass by ronnieColeman.jpg'
import massTechExtreme2000ByMuscleTech from '../Products/mass tech by muscleTech 22lbs.jpg'
import massTechExtreme2000ByMuscleTech71lb from '../Products/muscle tech extreme 2000 by muscletech.jpg'
import nitroTechWheyProtein from '../Products/nitrol tech whey protein.jpg'
import OnSeriousMassGainerChoclate from '../Products/On serious mass gainer chocolate.jpg'
import WheyProteinGoldStandardByOptimumNutrition from '../Products/op whey protein whey standard 2.27kg.jpg'
import RussianBear10000Banana from '../Products/russian bear 10000 6.8kg.jpg'
import C4extremepreWorkout from '../Products/C4 extreme pre –workout.jpg'
import CNPIGNITION30SERVINGSpreWorkout from '../Products/CNP IGNITION 30 SERVINGS pre workout.jpg'
import DRJEKYLLSIGNATURE30ServingspreWorkout from '../Products/DR. JEKYLL SIGNATURE – 30 Servings pre workout.jpg'
import { Route, useNavigate, Routes } from 'react-router-dom';
import Cart from './Cart';
import Footer from './footer'
export default function Product(props) {
    let navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    useEffect(() => {
        addToCart({});
    }, [])

    function handleClick(item) {
        props.handlePageItem(item);
        navigate('/product/item')
    }
    let men = [
        {
            pic: OnSeriousMassGainer,
            name: 'On Serious Mass Gainer',
            price: '2199',
            category: 'gainer',
            weight: '1 Kg',
            description: <p> <h3 >•  High Calorie Content:</h3 > Serious Mass is known for its high-calorie content, which is designed to help individuals meet their daily calorie and macronutrient needs for muscle building and weight gain.<br /> {<br />}<h3 >• Quality Protein:</h3 > It contains a blend of proteins, often including whey protein concentrate and isolate, as well as casein, which provides a sustained release of amino acids for muscle recovery and growth.<br />  {<br />} <h3 >• Carbohydrates:</h3 > Serious Mass includes a significant amount of carbohydrates, mainly in the form of maltodextrin, to support energy levels and replenish glycogen stores after intense workouts.<br /> {<br />} <h3 >• Essential Nutrients:</h3 > The product is typically enriched with essential vitamins and minerals, helping users meet their daily micronutrient requirements.<br /> {<br />} <h3 >• Variety of Flavors:</h3 > Optimum Nutrition offers a range of flavors to cater to different taste preferences.<br /> {<br />}<h3 >• Customizable Serving Sizes:</h3 > Users can adjust the serving size to meet their specific calorie and nutritional needs, making it suitable for various individuals and goals.<br /> {<br />} <h3 >• Post-Workout Recovery:</h3 > The combination of protein and carbohydrates in Serious Mass can be beneficial for post-workout recovery`
            </p>

        },
    ]
    let woman = [
        {
            pic: RussianBear10000Banana,
            name: 'Russian Bear 1000',
            price: '2199 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Formula:</h3 > Universal Gain Fast is a weight gainer supplement specifically designed to provide a high number of calories per serving.<br />It's targeted at individuals looking to increase their daily calorie intake to support muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend:</h3 > It typically contains a blend of proteins, such as whey protein concentrate, calcium caseinate, and egg albumin, offering a diverse array of protein sources for muscle repair and recovery.
                {<br />}<h3 >• Complex Carbohydrates:</h3 > Universal Gain Fast includes complex carbohydrates, often derived from maltodextrin and other carbohydrate sources.<br />These carbohydrates supply sustained energy for workouts and assist in glycogen replenishment.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often fortified with essential vitamins and minerals, including vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, supporting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Universal Gain Fast supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Universal Nutrition typically offers a variety of flavors, giving users options to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Universal Gain Fast or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        },

    ]
    let products = [
        {
            pic: OnSeriousMassGainer,
            name: 'On Serious Mass Gainer',
            price: '2199',
            category: 'gainer',
            weight: '1 Kg',
            description: <p><h3 >•  High Calorie Content: </h3 > Serious Mass is known for its high-calorie content, which is designed to help individuals meet their daily calorie and macronutrient needs for muscle building and weight gain.<br /> {<br />} <h3 >• Quality Protein: </h3 > It contains a blend of proteins, often including whey protein concentrate and isolate, as well as casein, which provides a sustained release of amino acids for muscle recovery and growth.<br />  {<br />} <h3 >• Carbohydrates: </h3 > Serious Mass includes a significant amount of carbohydrates, mainly in the form of maltodextrin, to support energy levels and replenish glycogen stores after intense workouts.<br /> {<br />} <h3 >• Essential Nutrients: </h3 > The product is typically enriched with essential vitamins and minerals, helping users meet their daily micronutrient requirements.<br /> {<br />} <h3 >• Variety of Flavors: </h3 > Optimum Nutrition offers a range of flavors to cater to different taste preferences.<br /> {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust the serving size to meet their specific calorie and nutritional needs, making it suitable for various individuals and goals.<br /> {<br />} <h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Serious Mass can be beneficial for post-workout recovery </p>
        },
        {
            pic: RussianBear10000Banana,
            name: 'Russian Bear 1000',
            price: '2199 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>
                <h3 >• High-Calorie Formula: </h3 > Russian Bear 1000 is a weight gainer supplement known for its extremely high-calorie content per serving, making it suitable for individuals seeking to rapidly increase their calorie intake.<br />{<br />}
                <h3 >• Blend of Proteins: </h3 > It typically contains a blend of proteins, including whey protein concentrate, calcium caseinate, and egg white protein, providing a variety of protein sources for muscle support.<br />{<br />}
                <h3 >• Carbohydrate-Rich: </h3 > This supplement is carbohydrate-dense, primarily utilizing maltodextrin as a carbohydrate source.<br />Carbohydrates supply energy for workouts and help replenish glycogen stores.<br />{<br />}
                <h3 >• Essential Nutrients: </h3 > Russian Bear 1000 is often fortified with essential vitamins and minerals, such as vitamins A, C, D, and various B vitamins, to support overall health.<br />{<br />}
                <h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.<br />{<br />}
                <h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Russian Bear 1000 can aid in post-workout recovery by supporting muscle repair and growth.<br />{<br />}
                <h3 >• Weight Gain Support: </h3 > It's designed for individuals who struggle with weight gain due to a fast metabolism or difficulty consuming enough calories through regular meals.<br />{<br />}
                <h3 >• Caloric Surplus: </h3 > Russian Bear 1000 helps create a significant caloric surplus, which is essential for those looking to gain weight and build muscle.<br />{<br />}
                <h3 >• Taste Variety: </h3 > Some formulations offer a variety of flavors to cater to different taste preferences.<br />{<br />}
                <h3 >• Use as Part of a Balanced Diet: </h3 > It's essential to use Russian Bear 1000 as a supplement to a well-rounded diet.<br />Whole foods should remain the foundation of one's nutritional intake.<br />{<br />}
                <h3 >• Consultation with Healthcare Professional: </h3 > Before using Russian Bear 1000 or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        }, {
            pic: ArnoldIronMass,
            name: 'Arnold Iron Mass',
            price: '2199',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>    <h3 >• High-Calorie Formula: </h3 > Arnold Iron Mass is a weight gainer supplement designed to provide a substantial number of calories per serving, making it suitable for individuals looking to increase their calorie intake for muscle growth and weight gain.<br />{<br />}
                <h3 >• Protein Blend: </h3 > It typically contains a blend of proteins, including high-quality sources like whey protein concentrate, whey protein isolate, and micellar casein, which provide essential amino acids for muscle repair and recovery.<br />{<br />}
                <h3 >• Complex Carbohydrates: </h3 > This weight gainer includes complex carbohydrates, often derived from sources like maltodextrin, oats, and sweet potato powder, to supply energy for workouts and assist in glycogen replenishment.<br />{<br />}
                <h3 >• Essential Nutrients: </h3 > Arnold Iron Mass is often enriched with essential vitamins and minerals, including vitamins A, C, D, and B-complex vitamins, as well as minerals like calcium and magnesium, supporting overall health.<br />{<br />}
                <h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.<br />{<br />}
                <h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Arnold Iron Mass supports post-workout recovery, aiding muscle repair and growth.<br />{<br />}
                <h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have a tough time gaining weight, whether due to a fast metabolism or other factors.<br />{<br />}
                <h3 >• Taste Variety: </h3 > Arnold Iron Mass often comes in various flavors to cater to different taste preferences.<br />{<br />}
                <h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a balanced and varied diet, with whole foods remaining the foundation of one's nutritional intake.<br />{<br />}
                <h3 >• Consultation with Healthcare Professional: </h3 > Before using Arnold Iron Mass or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        }, {
            pic: DymatizeSuper,
            name: 'Dymatize Super Mass Gainer',
            price: '2199 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>    <h3 >• High-Calorie Formula: </h3 > Dymatize Super Mass Gainer is a calorie-dense supplement designed to provide a significant number of calories per serving, making it suitable for individuals aiming to increase their daily calorie intake for muscle growth and weight gain.<br />{<br />}
                <h3 >• Protein Blend: </h3 > It typically contains a blend of high-quality proteins, including whey protein isolate, whey protein concentrate, and micellar casein, which supply essential amino acids to support muscle recovery and growth.<br />{<br />}
                <h3 >• Complex Carbohydrates: </h3 > This weight gainer includes complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources, which provide sustained energy for workouts and help replenish glycogen stores.<br />{<br />}
                <h3 >• Essential Nutrients: </h3 > Dymatize Super Mass Gainer is often fortified with essential vitamins and minerals, such as vitamins A, C, D, and B-complex vitamins, as well as minerals like calcium and magnesium, promoting overall health.<br />{<br />}
                <h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.<br />{<br />}
                <h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Dymatize Super Mass Gainer supports post-workout recovery, facilitating muscle repair and growth.<br />{<br />}
                <h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals struggling to gain weight, whether due to a fast metabolism or other factors.<br />{<br />}
                <h3 >• Variety of Flavors: </h3 > Dymatize offers a range of flavors, allowing users to find one that suits their taste preferences.<br />{<br />}
                <h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods remaining the foundation of one's nutritional intake.<br />{<br />}
                <h3 >• Consultation with Healthcare Professional: </h3 > Prior to using Dymatize Super Mass Gainer or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br />{<br />}
            </p>
        }, {
            pic: MassTechand1Bottle,
            name: 'Mass Tect and 1 Bottle free',
            price: '2499 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>    <h3 >• High-Calorie Formula: </h3 > Mass Tech is a high-calorie mass gainer supplement designed to provide a significant number of calories per serving, making it suitable for individuals aiming to increase their daily calorie intake for muscle growth and weight gain.<br />{<br />}
                <h3 >• Protein Blend: </h3 > It typically contains a blend of proteins, including whey protein concentrate, whey protein isolate, and whey peptides, providing a rich source of high-quality protein to support muscle recovery and growth.<br />{<br />}
                <h3 >• Complex Carbohydrates: </h3 > Mass Tech incorporates complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources, which supply sustained energy for workouts and assist in glycogen replenishment.<br />{<br />}
                <h3 >• Essential Nutrients: </h3 > Mass Tech is often fortified with essential vitamins and minerals, such as vitamins A, C, D, and B-complex vitamins, as well as minerals like calcium and magnesium, supporting overall health.<br />{<br />}
                <h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.<br />{<br />}
                <h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Mass Tech supports post-workout recovery by promoting muscle repair and growth.<br />{<br />}
                <h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals struggling to gain weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Mass Tech is available in a range of flavors, allowing users to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods forming the basis of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Prior to using Mass Tech or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        },
        {
            pic: AnabolicMassGainer,
            name: 'Anabolic Mass Gainer',
            price: '2199 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Formula: </h3 > Anabolic mass gainers are designed to be high in calories, providing a substantial number of calories per serving.<br />This makes them suitable for individuals looking to increase their daily calorie intake to support muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > They typically contain a blend of proteins, including whey protein concentrate, whey protein isolate, and casein protein, which offer a variety of protein sources to support muscle repair and recovery.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Anabolic mass gainers incorporate complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources.<br />These carbohydrates provide sustained energy for workouts and help replenish glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > Many anabolic mass gainers are fortified with essential vitamins and minerals, such as vitamins A, C, D, and B-complex vitamins, as well as minerals like calcium and magnesium, promoting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in anabolic mass gainers supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > They are particularly beneficial for individuals who struggle to gain weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Anabolic mass gainers often come in a range of flavors, allowing users to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It's important to use anabolic mass gainers as a supplement to a balanced and varied diet.<br />Whole foods should remain the foundation of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using anabolic mass gainers or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br /></p>
        }, {
            pic: UniversalGainFast,
            name: 'Universal Gain Fast',
            price: '2199 ',
            weight: ' 1 Kg',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Formula: </h3 > Universal Gain Fast is a weight gainer supplement specifically designed to provide a high number of calories per serving.<br />It's targeted at individuals looking to increase their daily calorie intake to support muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > It typically contains a blend of proteins, such as whey protein concentrate, calcium caseinate, and egg albumin, offering a diverse array of protein sources for muscle repair and recovery.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Universal Gain Fast includes complex carbohydrates, often derived from maltodextrin and other carbohydrate sources.<br />These carbohydrates supply sustained energy for workouts and assist in glycogen replenishment.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often fortified with essential vitamins and minerals, including vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, supporting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Universal Gain Fast supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Universal Nutrition typically offers a variety of flavors, giving users options to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Universal Gain Fast or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br /></p>
        }, {
            pic: WheyProteinGoldStandard,
            name: 'Whey Protein Gold Standard',
            price: '2199 ',
            weight: '1 Kg',
            category: 'protein',
            description: <p>     {<br />}<h3 >• High-Quality Protein Source: </h3 > Gold Standard Whey Protein is renowned for its high-quality protein content.<br />It's derived from whey protein isolate, whey protein concentrate, and whey peptides, providing a rich source of essential amino acids.
                {<br />}<h3 >• Rapid Absorption: </h3 > Whey protein is known for its fast absorption rate, making it an excellent choice for post-workout supplementation.<br />It quickly delivers amino acids to muscles for recovery and growth.
                {<br />}<h3 >• Low in Fat and Carbs: </h3 > Gold Standard Whey Protein is typically low in fat and carbohydrates, making it suitable for those looking to increase their protein intake without significantly affecting their overall macronutrient balance.
                {<br />}<h3 >• Pure Whey Isolate: </h3 > Some formulations of this product contain a higher percentage of whey protein isolate, which is virtually free of fats and carbohydrates, making it an excellent option for those seeking a lean protein source.
                {<br />}<h3 >• Variety of Flavors: </h3 > Optimum Nutrition offers a wide range of flavors to cater to different taste preferences, from classic chocolate and vanilla to more unique options.
                {<br />}<h3 >• Versatile Usage: </h3 > Besides post-workout shakes, it can be used in smoothies, oatmeal, or as an ingredient in various recipes to increase protein content.
                {<br />}<h3 >• Certified Quality: </h3 > Optimum Nutrition is known for its commitment to quality and often undergoes rigorous testing and certification to ensure product purity and efficacy.
                {<br />}<h3 >• Mixability: </h3 > It typically mixes well with water or milk, resulting in a smooth and creamy texture, making it easy to consume.
                {<br />}<h3 >• Use for Various Goals: </h3 > It's suitable for various fitness goals, including muscle building, recovery, weight management, and as a convenient source of protein.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > As with any supplement, it's advisable to consult with a healthcare or nutrition professional before adding it to your diet, especially if you have specific dietary goals or health concerns.
            </p>
        }, {
            pic: innerArmourHardMass,
            name: 'Inner Armour Hard Mass',
            price: '2199 ',
            weight: '1 Kg',
            category: 'gainer',
            description: <p>
                {<br />}<h3 >• High-Calorie Formula: </h3 > Inner Armour Hard Mass is a mass gainer supplement designed to provide a high number of calories per serving, making it ideal for individuals aiming to increase their daily calorie intake for muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > It typically contains a blend of proteins, including whey protein concentrate, milk protein concentrate, and whey protein isolate, providing a diverse range of protein sources for muscle repair and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Hard Mass incorporates complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources.<br />These carbohydrates supply energy for workouts and help replenish glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often enriched with essential vitamins and minerals, including vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, promoting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Inner Armour Hard Mass supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Inner Armour often offers a variety of flavors, giving users options to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Inner Armour Hard Mass or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br /></p>
        }
        , {
            pic: nitroTechProtein,
            name: 'Nitro Tech Protein',
            price: '2199 ',
            weight: '1 Kg',
            category: 'protein',
            description: <p>     {<br />}<h3 >• High-Quality Whey Protein: </h3 > Nitro Tech is renowned for its premium whey protein content, primarily sourced from whey protein isolate and whey peptides.<br />These high-quality protein sources are rapidly absorbed by the body, making them an excellent choice for post-workout recovery.
                {<br />}<h3 >• Lean Protein Source: </h3 > This protein supplement is typically low in fat and carbohydrates, making it an ideal choice for individuals seeking to increase their protein intake without significantly impacting their overall macronutrient balance.
                {<br />}<h3 >• Rich in BCAAs: </h3 > Nitro Tech is naturally rich in essential branched-chain amino acids (BCAAs), including leucine, isoleucine, and valine.<br />BCAAs play a crucial role in muscle protein synthesis, aiding in recovery and reducing muscle soreness.
                {<br />}<h3 >• Added Amino Acids: </h3 > Some Nitro Tech formulations include additional amino acids like glutamine and creatine, further supporting muscle recovery and growth.
                {<br />}<h3 >• Variety of Flavors: </h3 > Choose from a range of delicious flavors to suit your taste preferences, making it a delightful addition to your daily routine.
                {<br />}<h3 >• Mixability: </h3 > Nitro Tech protein typically mixes effortlessly with water or milk, resulting in a smooth and creamy texture for easy consumption.
                {<br />}<h3 >• Versatile Usage: </h3 > Beyond post-workout shakes, you can incorporate Nitro Tech into smoothies, recipes, or baking to increase your protein intake creatively.
                {<br />}<h3 >• Quality Assurance: </h3 > Nitro Tech undergoes rigorous testing and quality control measures, ensuring product purity and effectiveness.
                {<br />}<h3 >• Support for Various Goals: </h3 > Whether your fitness goal is muscle building, recovery, or maintaining your protein intake, Nitro Tech is a versatile choice.
                {<br />}<h3 >• Expert Recommendation: </h3 > To make an informed choice about using Nitro Tech protein, consider consulting a healthcare or nutrition professional, especially if you have specific dietary goals or health concerns.<br /></p>
        }
        , {
            pic: AnabolicMassGainer3kg,
            name: 'Anabolic Mass Gainer',
            price: '14000 ',
            weight: '3 Kg',
            category: 'gainer',
            description: <p>
                {<br />}<h3 >• High-Calorie Formula: </h3 > Our Anabolic Mass Gainer in the 3kg size is specifically formulated to provide a substantial number of calories per serving, making it an excellent choice for individuals looking to increase their daily calorie intake to support muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > This mass gainer typically contains a blend of high-quality proteins, including whey protein concentrate, whey protein isolate, and casein, providing a diverse range of protein sources to support muscle recovery and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Anabolic Mass Gainer in the 3kg size incorporates complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources, to provide sustained energy for workouts and assist in glycogen replenishment.
                {<br />}<h3 >• Essential Nutrients: </h3 > Our Anabolic Mass Gainer is often fortified with essential vitamins and minerals, such as vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, promoting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in our Anabolic Mass Gainer supports post-workout recovery, aiding muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > We offer a variety of delicious flavors in the 3kg size, allowing users to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > Anabolic Mass Gainer should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of one's nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using our Anabolic Mass Gainer in the 3kg size or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        }, {
            pic: LabradaIsoWhey,
            name: 'Labra Iso Whey',
            price: '19000 ',
            weight: '5 lbs',
            category: 'protein',
            description: <p>     {<br />}<h3 >• High-Quality Whey Isolate: </h3 > Labrada ISO Whey Protein is renowned for its premium whey protein isolate content.<br />Whey isolate is a fast-absorbing, high-quality protein source, making it an excellent choice for post-workout recovery.
                {<br />}<h3 >• Pure and Low in Fat: </h3 > This whey protein supplement is typically low in fat and carbohydrates, making it a lean source of protein.<br />It provides a concentrated dose of protein without adding unnecessary calories.
                {<br />}<h3 >• Rich in Essential Amino Acids: </h3 > ISO Whey Protein is naturally rich in essential amino acids, including branched-chain amino acids (BCAAs) like leucine, isoleucine, and valine.<br />BCAAs play a key role in muscle protein synthesis, supporting recovery and reducing muscle soreness.
                {<br />}<h3 >• Zero Added Sugar: </h3 > Labrada ISO Whey is often free from added sugars, catering to those seeking a low-sugar protein supplement.
                {<br />}<h3 >• Gluten-Free: </h3 > It is a gluten-free protein option, suitable for individuals with gluten sensitivities or those following a gluten-free diet.
                {<br />}<h3 >• Mixes Easily: </h3 > Labrada ISO Whey Protein typically mixes easily with water or your preferred liquid, resulting in a smooth and delicious protein shake.
                {<br />}<h3 >• Variety of Flavors: </h3 > Choose from a range of enticing flavors, allowing you to enjoy a delightful and satisfying protein shake experience.
                {<br />}<h3 >• Ideal for Multiple Uses: </h3 > Beyond post-workout recovery, ISO Whey Protein can be used in smoothies, baking, or as a versatile ingredient in various recipes to increase your daily protein intake.
                {<br />}<h3 >• Quality Assurance: </h3 > Labrada is committed to quality and often undergoes testing and quality control measures to ensure the purity and effectiveness of their products.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > For personalized guidance on incorporating Labrada ISO Whey Protein into your fitness or dietary regimen, consider consulting with a healthcare or nutrition professional.
            </p>
        }, {
            pic: DymatizeIsoWhey,
            name: 'Dymatize Iso Whey',
            price: '26500 ',
            weight: '5 lbs',
            category: 'protein',
            description: <p>     {<br />}<h3 >• Premium Whey Isolate: </h3 > Dymatize ISO100 Whey Protein is renowned for its high-quality whey protein isolate content.<br />Whey isolate is a rapidly absorbed protein source, making it an excellent choice for post-workout recovery and muscle support.
                {<br />}<h3 >• Low in Calories and Carbs: </h3 > This whey protein supplement is typically low in calories and carbohydrates, making it an ideal option for those seeking a lean and pure protein source without extra calories.
                {<br />}<h3 >• Exceptionally Pure: </h3 > ISO100 Whey Protein is known for its exceptional purity, often undergoing extensive filtration processes to remove excess fats and carbohydrates, resulting in a protein that's virtually free from impurities.
                {<br />}<h3 >• Rich in BCAAs: </h3 > It is naturally rich in essential branched-chain amino acids (BCAAs), including leucine, isoleucine, and valine.<br />BCAAs are crucial for muscle protein synthesis, post-workout recovery, and reducing muscle soreness.
                {<br />}<h3 >• Zero Added Sugar: </h3 > Dymatize ISO100 Whey Protein is typically free from added sugars, making it a favorable choice for individuals seeking a low-sugar protein supplement.
                {<br />}<h3 >• Gluten-Free: </h3 > It is often gluten-free, making it suitable for individuals with gluten sensitivities or those following a gluten-free diet.
                {<br />}<h3 >• Mixes Effortlessly: </h3 > ISO100 Whey Protein typically mixes easily with water, milk, or your preferred liquid, resulting in a smooth and delicious protein shake with no clumps.
                {<br />}<h3 >• Variety of Flavors: </h3 > Choose from a diverse range of flavors, allowing you to enjoy a tasty and satisfying protein shake experience.
                {<br />}<h3 >• Versatile Usage: </h3 > Beyond post-workout recovery, ISO100 Whey Protein can be used in smoothies, baking, or as an ingredient in various recipes to boost your daily protein intake.
                {<br />}<h3 >• Quality Assurance: </h3 > Dymatize is committed to quality and often subjects its products to rigorous testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > For personalized guidance on incorporating Dymatize ISO100 Whey Protein into your fitness or dietary regimen, consider consulting with a healthcare or nutrition professional.
            </p>
        }, {
            pic: carnivorMassBisSteer1250,
            name: 'Carnivor Mass Big Steer 1250',
            price: '17000 ',
            weight: '15 lbs',
            category: 'gainer',
            description: <p>
                {<br />}<h3 >• High-Quality Beef Protein Isolate: </h3 > Carnivor Mass is renowned for its use of high-quality beef protein isolate as the primary protein source.<br />This unique protein source is derived from beef and offers a valuable alternative to traditional whey and plant-based proteins.
                {<br />}<h3 >• Beef Protein Benefits: </h3 > Beef protein isolate is naturally rich in essential amino acids and provides a complete protein profile.<br />It is particularly high in branched-chain amino acids (BCAAs), promoting muscle recovery and growth.
                {<br />}<h3 >• Low in Fat and Carbs: </h3 > Carnivor Mass is often low in fat and carbohydrates, making it an excellent choice for those looking to increase protein intake without significant extra calories.
                {<br />}<h3 >• Low in Sugar: </h3 > This protein supplement is typically low in sugar or completely sugar-free, catering to those seeking a low-sugar protein option.
                {<br />}<h3 >• Mixability: </h3 > Carnivor Mass generally mixes well with water or your preferred liquid, resulting in a smooth and flavorful protein shake.
                {<br />}<h3 >• Variety of Flavors: </h3 > Choose from a selection of flavors to find the one that suits your taste preferences best.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The protein content in Carnivor Mass supports post-workout muscle recovery, helping you repair and grow lean muscle tissue.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > It should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of your nutritional intake.
                {<br />}<h3 >• Quality Assurance: </h3 > Carnivor Mass often undergoes rigorous testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > For personalized guidance on incorporating Carnivor Mass Beef Protein Isolate into your fitness or dietary regimen, consider consulting with a healthcare or nutrition professional.
            </p>
        },
        {
            pic: cellTechCreatineMonohydrate,
            name: 'Cell Tech Creatine Monohydrate Fruit punch',
            price: '8000 ',
            category: 'creatine',
            description: <p>     {<br />}<h3 >• Advanced Creatine Formula: </h3 > Cell Tech Creatine by MuscleTech is an advanced creatine supplement designed to help you maximize your strength, power, and muscle gains during your workouts.
                {<br />}<h3 >• Scientifically Developed: </h3 > MuscleTech, a well-respected brand in the fitness industry, has formulated Cell Tech using cutting-edge research and scientific principles to deliver a premium creatine product.
                {<br />}<h3 >• Creatine Monohydrate: </h3 > It primarily contains creatine monohydrate, one of the most studied and effective forms of creatine.<br />Creatine is a naturally occurring compound in the body that plays a crucial role in energy production and muscle contractions.
                {<br />}<h3 >• Increased Muscle Size and Strength: </h3 > Cell Tech is known for its potential to increase muscle size and strength, making it a favorite among athletes and bodybuilders.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The supplement is often used as part of a post-workout regimen to aid in muscle recovery and reduce muscle soreness.
                {<br />}<h3 >• Enhanced Nutrient Transport: </h3 > Cell Tech contains a unique blend of carbohydrates and electrolytes, which can enhance nutrient transport to your muscle cells, helping you get the most out of your workouts.
                {<br />}<h3 >• Flavor Variety: </h3 > MuscleTech offers a range of flavors, allowing you to choose the one that suits your taste preferences best.
                {<br />}<h3 >• Mixability: </h3 > Cell Tech Creatine typically mixes well with water or your preferred beverage, ensuring a smooth and tasty post-workout shake.
                {<br />}<h3 >• Quality Assurance: </h3 > MuscleTech products undergo rigorous testing and quality control measures to ensure purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > For personalized guidance on incorporating Cell Tech Creatine by MuscleTech into your fitness routine, consider consulting with a healthcare or nutrition professional.
            </p>
        }, {
            pic: CriticalMassGainerByAppliedNutrition,
            name: 'Critical Mass Gainer By Applied Nutrition',
            price: '17500 ',
            weight: '6 Kg',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Mass Gainer: </h3 > Critical Mass Gainer by Applied Nutrition is a high-calorie supplement carefully crafted to support individuals looking to increase their daily calorie intake for muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > This mass gainer typically contains a blend of high-quality proteins, including whey protein concentrate, milk protein concentrate, and whey protein isolate.<br />These proteins offer a diverse range of amino acids to support muscle recovery and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Critical Mass Gainer incorporates complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources.<br />These carbohydrates provide sustained energy for workouts and assist in replenishing glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often enriched with essential vitamins and minerals, including vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, promoting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Critical Mass Gainer supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Applied Nutrition often offers a range of flavors, giving users options to find one that suits their taste preferences.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > Critical Mass Gainer should be used as a supplement to a well-rounded diet, with whole foods forming the foundation of one's nutritional intake.
                {<br />}<h3 >• Quality Assurance: </h3 > Applied Nutrition is known for its commitment to quality and often subjects its products to testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Critical Mass Gainer or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        }, {
            pic: goldSuperMassByKevenlebroune,
            name: 'Gold Super Mass By Kevenlebroune',
            price: '20000 ',
            weight: '7 Kg',
            category: 'gainer',
            description: <p>
                {<br />}<h3 >• Premium Protein Blend: WPI, WPC, WPH</h3 >
                {<br />}<h3 >• Growth Hormone Booster</h3 >
                {<br />}<h3 >• Anticatabolic Formula BCAA, L-Glutamine, HMB</h3 >
                {<br />}<h3 >• Special Fat Complex: MCT, CLA
                </h3 >             {<br />}<h3 >• Testosterone Inducer</h3 >
            </p>
        }, {
            pic: RcKingMass,
            name: 'Ronnie Coleman King Mass',
            price: '14000 ',
            weight: '10 lbs',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Mass Gainer: </h3 > King Mass Gainer by Ronnie Coleman Signature Series is a high-calorie supplement specially formulated to help individuals increase their daily calorie intake for muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > This mass gainer typically contains a blend of protein sources, including whey protein concentrate, milk protein isolate, and whey protein isolate, providing a diverse range of amino acids to support muscle recovery and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > King Mass Gainer incorporates complex carbohydrates, often sourced from maltodextrin and other carbohydrate sources.<br />These carbohydrates supply sustained energy for workouts and aid in replenishing glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often enriched with essential vitamins and minerals, including vitamins A, C, D, B-complex vitamins, and minerals like calcium and magnesium, promoting overall health and well-being.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users can adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for flexibility based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in King Mass Gainer supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who have difficulty gaining weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Ronnie Coleman Signature Series often offers a range of flavors, allowing users to find one that suits their taste preferences.

                {<br />}<h3 >• Quality Assurance: </h3 > Applied Nutrition is known for its commitment to quality and often subjects its products to testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Critical Mass Gainer or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br /></p>
        }, {
            pic: massTechExtreme2000ByMuscleTech,
            name: 'Mass Tech Extreme 2000 By Muscle Tech',
            price: '26000 ',
            weight: '22 lbs',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• Ultimate Mass Gainer: </h3 > Mass Tech Extreme 2000 by MuscleTech is the ultimate mass gainer supplement, designed to help individuals achieve their muscle-building and weight-gaining goals.
                {<br />}<h3 >• High-Calorie Formula: </h3 > With an impressive 2,000 calories per serving, this mass gainer provides a substantial number of calories to support muscle growth and overall weight gain.
                {<br />}<h3 >• Protein Powerhouse: </h3 > Mass Tech Extreme 2000 is packed with a potent protein blend that includes whey protein concentrate, whey protein isolate, and whey peptides, offering a wide array of amino acids for muscle repair and recovery.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > This mass gainer incorporates complex carbohydrates from sources like maltodextrin, oats, and quinoa.<br />These carbs provide lasting energy for intense workouts and help refill glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is enriched with essential vitamins, minerals, and amino acids, ensuring comprehensive nutritional support for muscle development and overall well-being.
                {<br />}<h3 >• Customizable Servings: </h3 > Users have the flexibility to adjust serving sizes to meet their specific calorie and macronutrient requirements, catering to individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Mass Tech Extreme 2000 supports post-workout recovery by promoting muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly suitable for individuals seeking to gain weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > MuscleTech offers a variety of delicious flavors, allowing users to choose their preferred taste.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > Mass Tech Extreme 2000 should be used as a supplement to a balanced and varied diet, with whole foods forming the foundation of your nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Mass Tech Extreme 2000 or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.
            </p>
        }, {
            pic: massTechExtreme2000ByMuscleTech71lb,
            name: 'Mass Tech Extreme 2000 By Muscle Tech',
            price: '13600 ',
            weight: '7 lbs',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• Ultimate Mass Gainer: </h3 > MuscleTech Mass-Tech Extreme 2000 is the ultimate mass gainer supplement designed to help individuals achieve their muscle-building and weight-gaining goals effectively.
                {<br />}<h3 >• High-Calorie Formula: </h3 > With an impressive 2,000 calories per serving, this mass gainer provides a substantial number of calories to support muscle growth and overall weight gain.
                {<br />}<h3 >• Protein Powerhouse: </h3 > Mass-Tech Extreme 2000 is packed with a powerful protein blend that includes whey protein concentrate, whey protein isolate, and whey peptides, offering a comprehensive array of amino acids for muscle repair and recovery.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > This mass gainer incorporates complex carbohydrates sourced from high-quality grains, providing sustained energy for intense workouts and aiding in glycogen replenishment.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is fortified with essential vitamins, minerals, and amino acids, ensuring comprehensive nutritional support for muscle development, overall health, and well-being.
                {<br />}<h3 >• Customizable Servings: </h3 > Users have the flexibility to adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for tailored nutrition based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Mass-Tech Extreme 2000 supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly suitable for individuals seeking to gain weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > MuscleTech offers a range of delicious flavors, enabling users to choose their preferred taste experience.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > Mass-Tech Extreme 2000 should be used as a supplement to a balanced and diverse diet, with whole foods forming the foundation of your nutritional intake.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Mass-Tech Extreme 2000 or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.<br /></p>
        }
        , {
            pic: nitroTechWheyProtein,
            name: 'Nitro Tech Whey Protein',
            price: '12000 ',
            weight: '2 lbs',
            category: 'protein',
            description: <p>     {<br />}<h3 >• High-Quality Whey Protein: </h3 > Nitro Tech Whey Protein is a premium protein supplement known for its high-quality whey protein content, primarily sourced from whey protein isolate and whey peptides.<br />These protein sources are rapidly absorbed by the body, making it an excellent choice for post-workout recovery.
                {<br />}<h3 >• Lean Protein Source: </h3 > This whey protein supplement is typically low in fat and carbohydrates, making it suitable for individuals looking to increase their protein intake without significantly affecting their overall macronutrient balance.
                {<br />}<h3 >• Rich in BCAAs: </h3 > Nitro Tech is naturally rich in branched-chain amino acids (BCAAs), including leucine, isoleucine, and valine.<br />BCAAs are essential for muscle protein synthesis, recovery, and reducing muscle soreness.
                {<br />}<h3 >• Added Amino Acids: </h3 > Some formulations of Nitro Tech include additional amino acids like glutamine and creatine.<br />These amino acids can further support muscle recovery and growth.
                {<br />}<h3 >• Variety of Flavors: </h3 > The product typically comes in a range of flavors, allowing users to choose their preferred taste.
                {<br />}<h3 >• Mixability: </h3 > Nitro Tech Whey Protein usually mixes well with water or milk, resulting in a smooth and creamy texture for easy consumption.
                {<br />}<h3 >• Versatile Usage: </h3 > Besides post-workout shakes, it can be used in smoothies, oatmeal, or as an ingredient in various recipes to increase protein content.
                {<br />}<h3 >• Quality Assurance: </h3 > Nitro Tech is often subject to rigorous testing and quality control measures to ensure product purity and efficacy.
                {<br />}<h3 >• Customizable Servings: </h3 > With a 2lbs size, users can adjust serving sizes to meet their specific protein requirements, making it convenient for various fitness goals.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > As with any supplement, it's advisable to consult with a healthcare or nutrition professional before adding it to your diet, especially if you have specific dietary goals or health concerns.<br /></p>
        }
        , {
            pic: OnSeriousMassGainerChoclate,
            name: 'On Serious Mass Gainer Choclate',
            price: '13800 ',
            weight: '6 lbs',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• High-Calorie Mass Gainer: </h3 > ON Serious Mass Gainer is a premium mass gainer supplement designed to help individuals meet their daily calorie needs for muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > This mass gainer typically contains a blend of high-quality proteins, including whey protein concentrate, calcium caseinate, egg albumin, and more.<br />This diverse protein profile provides a wide range of amino acids for muscle repair and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > Serious Mass incorporates complex carbohydrates sourced from maltodextrin and other carbohydrate sources.<br />These carbohydrates supply sustained energy for intense workouts and assist in replenishing glycogen stores.
                {<br />}<h3 >• Essential Nutrients: </h3 > The supplement is often enriched with essential vitamins, minerals, and amino acids, ensuring comprehensive nutritional support for muscle development and overall health.
                {<br />}<h3 >• Customizable Serving Sizes: </h3 > Users have the flexibility to adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for personalized nutrition based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in ON Serious Mass Gainer supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly beneficial for individuals who struggle to gain weight, whether due to a fast metabolism or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Optimum Nutrition (ON) offers a variety of delicious flavors, allowing users to choose their preferred taste experience.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > ON Serious Mass Gainer should be used as a supplement to a balanced and varied diet, with whole foods forming the foundation of your nutritional intake.
                {<br />}<h3 >• Quality Assurance: </h3 > Optimum Nutrition is known for its commitment to quality and often subjects its products to rigorous testing and quality control measures to ensure product purity and effectiveness.<br /></p>
        }, {
            pic: WheyProteinGoldStandardByOptimumNutrition,
            name: 'Whey Protein Gold Standard By Optimum Nutrition',
            price: '26500 ',
            weight: '5 lbs',
            category: 'protein',
            description: <p>     {<br />}<h3 >• Industry-Leading Whey Protein: </h3 > Whey Protein Gold Standard by Optimum Nutrition is renowned as one of the industry's leading whey protein supplements, setting the gold standard for quality and effectiveness.
                {<br />}<h3 >• High-Quality Protein: </h3 > It is made from a blend of whey protein isolate, whey protein concentrate, and whey peptides, providing a rich source of high-quality protein to support muscle recovery and growth.
                {<br />}<h3 >• Fast Absorption: </h3 > The whey protein sources in Gold Standard are rapidly absorbed by the body, making it an excellent choice for post-workout recovery when your muscles need protein the most.
                {<br />}<h3 >• Rich in BCAAs: </h3 > This supplement is naturally rich in branched-chain amino acids (BCAAs), including leucine, isoleucine, and valine.<br />BCAAs are essential for muscle protein synthesis, recovery, and reducing muscle soreness.
                {<br />}<h3 >• Low in Fat and Sugar: </h3 > Whey Protein Gold Standard is typically low in fat and sugar, making it a lean source of protein that fits into a variety of dietary plans.
                {<br />}<h3 >• Mixability: </h3 > It mixes easily with water, milk, or your preferred beverage, creating a smooth and delicious protein shake without clumps.
                {<br />}<h3 >• Variety of Flavors: </h3 > Optimum Nutrition offers a wide range of flavors, allowing you to choose your favorite taste and keep your protein intake enjoyable.
                {<br />}<h3 >• Versatile Usage: </h3 > In addition to post-workout shakes, Whey Protein Gold Standard can be used in smoothies, baking, or as an ingredient in various recipes to increase your protein intake creatively.
                {<br />}<h3 >• Quality Assurance: </h3 > Optimum Nutrition places a strong emphasis on quality and often subjects its products to rigorous testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > For personalized guidance on incorporating Whey Protein Gold Standard into your fitness or dietary regimen, consider consulting with a healthcare or nutrition professional.
            </p>
        }, {
            pic: RussianBear1000,
            name: 'Russian Bear 1000 Chocolate',
            price: '17000 ',
            weight: '15 lbs',
            category: 'gainer',
            description: <p>     {<br />}<h3 >• Ultimate Mass Gainer: </h3 > Russian Bear 10000 is an ultimate mass gainer supplement designed to help individuals achieve their muscle-building and weight-gaining goals effectively.
                {<br />}<h3 >• High-Calorie Formula: </h3 > With a whopping 10,000 calories per serving, this mass gainer provides an extraordinary amount of calories, making it ideal for individuals seeking significant muscle growth and weight gain.
                {<br />}<h3 >• Protein Blend: </h3 > Russian Bear 10000 includes a blend of high-quality proteins, including whey protein concentrate, micellar casein, and egg white protein.<br />This diverse protein profile provides a wide range of amino acids to support muscle recovery and growth.
                {<br />}<h3 >• Complex Carbohydrates: </h3 > The supplement incorporates complex carbohydrates sourced from quality grains, providing long-lasting energy for demanding workouts and aiding in glycogen replenishment.
                {<br />}<h3 >• Essential Nutrients: </h3 > Russian Bear 10000 is typically enriched with essential vitamins, minerals, and amino acids, ensuring comprehensive nutritional support for muscle development and overall well-being.
                {<br />}<h3 >• Customizable Servings: </h3 > Users have the flexibility to adjust serving sizes to meet their specific calorie and macronutrient requirements, allowing for personalized nutrition based on individual fitness goals and dietary needs.
                {<br />}<h3 >• Post-Workout Recovery: </h3 > The combination of protein and carbohydrates in Russian Bear 10000 supports post-workout recovery by facilitating muscle repair and growth.
                {<br />}<h3 >• Weight Gain Support: </h3 > It is particularly suitable for individuals who struggle to gain weight due to a fast metabolism, intense workouts, or other factors.
                {<br />}<h3 >• Variety of Flavors: </h3 > Russian Bear offers a range of delicious flavors, enabling users to choose their preferred taste experience.
                {<br />}<h3 >• Use as Part of a Balanced Diet: </h3 > Russian Bear 10000 should be used as a supplement to a balanced and varied diet, with whole foods forming the foundation of your nutritional intake.
                {<br />}<h3 >• Quality Assurance: </h3 > The product often undergoes rigorous testing and quality control measures to ensure product purity and effectiveness.
                {<br />}<h3 >• Consultation with Healthcare Professional: </h3 > Before using Russian Bear 10000 or any high-calorie supplement, individuals should consult with a healthcare or nutrition professional to ensure it aligns with their health and fitness goals.


            </p>
        },
        {
            pic: C4extremepreWorkout,
            name: ' C4 Extreme ',
            weight: '30 servings',
            category: 'pre',
            price: '6199',
            description: <p>
                <br /> • <h3> Explosive Energy Boost: </h3> C4 Extreme Pre-Workout is formulated to provide an explosive surge of energy, allowing you to push your limits and maximize your workout performance.
                <br /> • <h3> Advanced Performance: </h3> This pre-workout supplement is crafted with cutting-edge ingredients, including beta-alanine, creatine nitrate, arginine alpha-ketoglutarate (AKG), and caffeine, designed to enhance endurance, strength, and overall athletic performance.
                <br /> • <h3> Intense Focus: </h3> C4 Extreme is not just about physical energy; it also enhances mental focus and concentration. It helps you dial in on your workout, enabling you to stay motivated and maintain peak mental alertness during training sessions.
                <br /> • <h3> Beta-Alanine for Endurance: </h3> Beta-alanine in C4 Extreme helps buffer lactic acid build-up in muscles, delaying fatigue and allowing you to push through more reps and sets.
                <br /> • <h3> Nitric Oxide Support: </h3> Ingredients like arginine AKG promote the production of nitric oxide, improving blood flow to muscles. This increased blood flow provides muscles with more oxygen and nutrients, enhancing performance and muscle pumps.
                <br /> • <h3> 30 Servings: </h3> The 30-serving size provides a month's supply of powerful pre-workout fuel, ensuring you're ready to tackle your workouts consistently.
                <br /> • <h3> Great Taste: </h3> C4 Extreme is available in a variety of delicious flavors, making it not only effective but also enjoyable to drink.
                <br /> • <h3> Easy to Mix: </h3> The powder formula of C4 Extreme pre-workout is easy to mix with water or your favorite beverage, ensuring a smooth and refreshing pre-workout drink experience.
                <br /> • <h3> Quality Assurance: </h3> C4 Extreme Pre-Workout is produced by reputable manufacturers and often undergoes testing to ensure product quality and safety.
                <br /> • <h3> Consultation with Healthcare Professional: </h3> Before using any pre-workout supplement, especially if you have underlying health conditions, it's advisable to consult with a healthcare professional to ensure it aligns with your health and fitness goals.`
            </p>

        }, {
            pic: CNPIGNITION30SERVINGSpreWorkout,
            name: 'CNP IGNITION',
            weight: '30 servings',
            category: 'pre',
            price: '5900',
            description: <p>
                <br /> • <h3> Explosive Energy Surge: </h3> CNP Ignition is a potent pre-workout supplement designed to provide an explosive boost of energy, enhancing your workout performance and intensity.
                <br /> • <h3> Advanced Performance Blend: </h3> This pre-workout formula features a powerful blend of ingredients, including beta-alanine, citrulline malate, caffeine, and other performance-enhancing compounds. These ingredients work synergistically to improve endurance, strength, and focus during workouts.
                <br /> • <h3> Beta-Alanine for Endurance: </h3> Beta-alanine in CNP Ignition helps delay muscle fatigue by buffering lactic acid build-up. This enables you to perform more reps and push through intense training sessions with greater endurance.
                <br /> • <h3> Citrulline Malate for Muscle Pumps: </h3> Citrulline malate enhances nitric oxide production, promoting vasodilation and increasing blood flow to working muscles. This results in better muscle pumps and improved nutrient delivery, supporting muscle growth and recovery.
                <br /> • <h3> Intense Focus and Concentration: </h3> CNP Ignition contains focus-enhancing ingredients like caffeine and nootropics, helping you stay mentally sharp and concentrated throughout your workout. This focus can make a significant difference, especially during challenging or long training sessions.
                <br /> • <h3> 30 Servings: </h3> The 30-serving size ensures a month's supply of high-quality pre-workout fuel, allowing you to consistently elevate your workouts.
                <br /> • <h3> Quick Absorption: </h3> CNP Ignition is formulated for fast absorption, allowing the active ingredients to reach your bloodstream quickly and kickstart your energy levels almost immediately after consumption.
                <br /> • <h3> Variety of Flavors: </h3> Enjoy your pre-workout experience with a range of delicious flavors, making your supplement routine both effective and enjoyable.
                <br /> • <h3> Quality Assurance: </h3> CNP Ignition is produced following strict quality standards and is often subjected to testing to ensure its purity, effectiveness, and safety.
                <br /> • <h3> Consultation with Healthcare Professional: </h3> Before using any pre-workout supplement, especially if you have underlying health conditions, it's advisable to consult with a healthcare professional to ensure it aligns with your health and fitness goals.
            </p>,

        }, {
            pic: DRJEKYLLSIGNATURE30ServingspreWorkout,
            name: 'DR JEKYLL SIGNATURE',
            weight: '30 servings',
            category: 'pre',
            price: '7200',
            description: <p>
                <br /> • <h3> Enhanced Energy and Focus: </h3> Dr. Jekyll Signature is a high-quality pre-workout supplement meticulously crafted to provide you with enhanced energy, focus, and endurance during your workouts. It’s your go-to solution for pushing your limits and achieving peak performance.
                <br /> • <h3> Scientifically Formulated: </h3> Developed with scientifically backed ingredients, Dr. Jekyll Signature features a unique blend of caffeine, beta-alanine, citrulline malate, and other performance-enhancing compounds. This blend is designed to optimize your workouts and help you achieve your fitness goals.
                <br /> • <h3> Beta-Alanine for Endurance: </h3> Beta-alanine helps buffer lactic acid, delaying muscle fatigue and allowing you to squeeze out extra reps and sets. This leads to improved endurance, especially during high-intensity exercises.
                <br /> • <h3> Citrulline Malate for Muscle Pumps: </h3> Citrulline malate increases nitric oxide production, promoting better blood flow to your muscles. This enhances muscle pumps, nutrient delivery, and overall workout performance.
                <br /> • <h3> Intense Focus and Mental Clarity: </h3> Dr. Jekyll Signature contains nootropics and focus-enhancing ingredients that keep you mentally sharp and focused throughout your workout. Maintaining concentration is crucial for proper form and effective training.
                <br /> • <h3> 30 Servings: </h3> With 30 servings per container, Dr. Jekyll Signature provides a month's supply of premium pre-workout fuel, ensuring you have the energy you need for every workout session.
                <br /> • <h3> Quick Absorption: </h3> This pre-workout is designed for rapid absorption, allowing you to feel the effects soon after consumption. Say goodbye to sluggish starts and hello to powerful workouts from the get-go.
                <br /> • <h3> Variety of Flavors: </h3> Enjoy your pre-workout experience with a selection of delicious flavors. Finding a flavor you love adds to the overall enjoyment of your workout routine.
                <br /> • <h3> Quality Assurance: </h3> Dr. Jekyll Signature is manufactured under strict quality standards and often undergoes rigorous testing to ensure purity, potency, and effectiveness.
                <br /> • <h3> Consultation with Healthcare Professional: </h3> Before using any pre-workout supplement, especially if you have underlying health conditions, it's advisable to consult with a healthcare professional to ensure it aligns with your health and fitness goals.

            </p>,

        },
    ]
    let Gainer = products.filter((num) => num.category === 'gainer');
    let preWorkout = products.filter((num) => {
        if (num.category === 'pre' || num.category === 'creatine') return true;
    });
    let protein = products.filter((num) => num.category === 'protein');
 //   let fatBurner = products.filter((num) => num.category === 'fat');
//    let accessory = products.filter((num) => num.category === 'accessory');
    return (
        <>
            <section className='product'>
                <h1 className="heading">
                    Product
                </h1>
                {
                    Gainer && <h2 className="heading2" id="gainer">Mass Gainer</h2>
                }
                <article className="gainer" >
                    {
                        Gainer.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,

                                description: e.description
                            }
                            return (
                                <figure>
                                    <img src={e.pic} alt="" onClick={() => handleClick(item)} />
                                    <figcaption onClick={() => handleClick(item)} >Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong>/Rs</figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart')
                                    }
                                    } className='btn5'>Add to Cart</button>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart/form')
                                    }
                                    } className='btn5'>Buy Now</button>
                                </figure>
                            )
                        })
                    }
                </article>
                {

                    protein && <h2 className="heading2" id="protein">Protein</h2>
                }
                <article className="protein" >
                    {
                        protein &&
                        protein.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description,
                            }
                            return (
                                <figure  >
                                    <img src={e.pic} alt="" onClick={() => handleClick(item)} />
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart')
                                    }} className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        },)}
                </article>
                {

                    preWorkout && <h2 className="heading2" id="preWorkout">Pre Workout</h2>
                }
                <article className="preWorkout" >
                    {
                        preWorkout &&
                        preWorkout.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description
                            }
                            return (
                                <figure >

                                    <img src={e.pic} alt="" onClick={() => handleClick(item)} />
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart')
                                    }} className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        })
                    }
                </article>
                {
           /*  fatBurner &&  <h2 className="heading2" id="fatBurner">Fat Burner</h2>
              
                <article className="fatBurner" >
                    {
                        
                        fatBurner.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description
                            }
                            return (
                                <figure >
                                    <img src={e.pic} alt="" onClick={() => handleClick(item)} />
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                 navigate('/product/cart')  }}  className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        })
                    }
                </article>
                */}
                {
/*
              accessory && <h2 className="heading2" id="accessory">Accessories</h2>
                <article className="accessory" >
                    {
                        accessory.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description
                            }
                            return (
                                <figure >
                                    <img src={e.pic} alt="" onClick={() => handleClick(item)}/>
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                 navigate('/product/cart')  }}  className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        })
                    }
                </article>
                */ }

                {

                    men && <h2 className="heading2" id="menProduct">Men Product</h2>
                }
                <article className="menPoduct" >
                    {
                        men.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description
                            }
                            return (
                                <figure  >
                                    <img src={e.pic} alt="" />
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart')
                                    }} className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        })
                    }
                </article>
                {

                    woman && <h2 className="heading2" id="womenProduct">Woman Product</h2>
                }
                <article className="womenProduct" >
                    {
                        woman.map((e) => {
                            let item = {
                                name: e.name, pic: e.pic,
                                weight: e.weight,
                                price: e.price,
                                description: e.description
                            }
                            return (
                                <figure  >
                                    <img src={e.pic} alt="" />
                                    <figcaption onClick={() => handleClick(item)}>Name : <strong> {e.name}</strong></figcaption>
                                    <figcaption onClick={() => handleClick(item)}>Weight : <strong> {e.weight}</strong></figcaption>

                                    <figcaption onClick={() => handleClick(item)}>Price : <strong> {e.price}</strong></figcaption>
                                    <button onClick={() => {
                                        addToCart(e);
                                        props.submit(e);
                                        navigate('/product/cart')
                                    }} className='btn5'>Add to Cart</button>
                                </figure>
                            )
                        })
                    }
                </article>

                <Routes>

                    <Route path='/product/cart' element={<Cart cart={cart} />} />
                </Routes>
                <button className="btn5" onClick={() => { navigate('/product/cart') }}>Go to Cart</button>
            </section>
            <Footer />
        </>
    )
}
