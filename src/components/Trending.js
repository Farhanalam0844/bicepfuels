import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnSeriousMassGainer from '../Products/ON serious mass gainer.jpg'
import ArnoldIronMass from '../Products/arnold iron mass 1.jpg'
import DymatizeSuper from '../Products/dymatize-super-mass-gainer 2lb-.jpg'
import MassTechand1Bottle from '../Products/muscle tech extreme 2000 by muscletech.jpg'
import AnabolicMassGainer from '../Products/anabolic mass gainer.jpg'
import UniversalGainFast from '../Products/unvieresal gain fast.jpg'
import innerArmourHardMass from '../Products/inner armour hard mass.jpg'
import nitroTechProtein from '../Products/nitrol tech protein.jpg'
import WheyProteinGoldStandard from '../Products/gold standard whey protein .jpg'
import RussianBear10000Banana from '../Products/russian bear 10000 6.8kg.jpg'

function Trending(props) {
    let trending = [
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
    ];
    let navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    function handleClick(item) {
        props.handlePageItem(item);
        navigate('/product/item')
    }
    return (
        <section className="trending product">
            <h1 className="heading">
                Trending Products
            </h1>
            <article className="trending" >
                {
                    trending.map((e,Key) => {
                        let item = {
                            name: e.name, pic: e.pic,
                            weight: e.weight,
                            price: e.price,
                            description: e.description
                        }
                        return (
                            <figure key={Key}>
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
        </section>
    );
}

export default Trending;
