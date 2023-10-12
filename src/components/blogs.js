import React, { useState } from 'react';
import Footer from './footer';

function Blogs(props) {
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);
  const [vis3, setVis3] = useState(false);
  const [more1,setMore1]=useState('More');
  const [more2,setMore2]=useState('More');
  const [more3,setMore3]=useState('More');

  return (
<>
<section className="blog">
      <h1 className="heading">Blogs</h1>
      <article>
        <h1 >Effective Strategies for Mass Gaining</h1>
        <h2> Author : <i>Farhan</i> </h2>
        <p>Are you struggling to build muscle mass and achieve the physique you desire? Mass gaining requires a dedicated approach that combines proper nutrition, targeted exercise routines, and smart recovery strategies. In this comprehensive guide, we will explore effective strategies to help you gain mass and transform your body.</p>
        <br />
        {
          vis1 ? <p> <h3> 1. The Caloric Surplus: The Foundation of Mass Gaining</h3> One of the fundamental principles of mass gaining is achieving a caloric surplus. This means you need to consume more calories than your body burns daily. Calculate your maintenance calories and increase your daily intake by 300-500 calories to promote muscle growth.
            <br />
            <br />
            <h3>  2. Prioritize Protein Intake : </h3> Protein is the building block of muscle. Aim to include lean protein sources such as chicken, fish, lean beef, tofu, and legumes in every meal. Consuming protein-rich foods provides your body with the essential amino acids needed for muscle repair and growth.
            <br />
            <br />
            <h3>3. Embrace Strength Training : </h3> Incorporate strength training exercises into your workout routine. Compound exercises like squats, deadlifts, bench presses, and overhead presses are highly effective at stimulating muscle growth. Focus on progressive overload, gradually increasing the weight and intensity of your workouts.
            <br />
            <br />
            <h3>4. Adequate Rest and Recovery : </h3>Muscles grow during rest, not during the workout itself. Ensure you get 7-9 hours of quality sleep per night to support recovery. Allow each muscle group sufficient time to recover between workouts, typically 48-72 hours.
            <br /><br />
            <h3>4.  Consistent Tracking and Adjustments : </h3> Track your progress by keeping a workout journal and monitoring your nutritional intake. Make adjustments as needed, whether it's increasing calories, adjusting your workout routine, or fine-tuning your nutrition plan.

          </p>
            : null
        }
        <br />
        <button className='btn5' onClick={() =>{ setVis1(!vis1); if(more1==='More') setMore1('Less'); else setMore1('More')}}> Read {more1}</button>
      </article>
      <article>
        <h1 >The Science of Fat Loss</h1>
        <h2> Author : <i>Farhan</i> </h2>
        <p>Fat loss is a goal that many individuals pursue, but it often requires a deeper understanding of the science behind it. In this blog, we'll delve into the science of fat loss, shedding light on key principles and practical tips to help you succeed in your weight loss journey.</p>
        <br />
        {
          vis2 ? <p> <h3> 1. The Calorie Deficit: The Core of Fat Loss</h3>Fat loss revolves around achieving a calorie deficit. To lose fat, you must consume fewer calories than your body burns in a day. Calculate your daily maintenance calories and aim to create a sustainable calorie deficit by reducing your daily intake and increasing your physical activity.
            <br />
            <br />
            <h3>2. Cardio vs. Strength Training: Finding the Right Balance
            </h3> Both cardio and strength training have their roles in fat loss. Cardiovascular exercises help burn calories, while strength training builds and maintains lean muscle mass. Finding the right balance between the two is crucial for effective fat loss.
            <br />
            <br />
            <h3>  3. Nutrition for Fat Loss: Quality and Quantity Matters </h3>Your diet plays a significant role in fat loss. Focus on nutrient-dense, whole foods, and consider portion control. Pay attention to macronutrients (carbohydrates, proteins, and fats) and prioritize fiber-rich foods to keep you feeling full and satisfied.
            <br />
            <br />
            <h3>  4. Tracking Progress and Adjustments</h3>Monitoring your progress is essential. Track your weight, body measurements, and take progress photos. If you hit a plateau, consider adjusting your calorie intake, workout routine, or incorporating high-intensity interval training (HIIT) for an extra fat-burning boost.</p> : null
        }
        <br />
        <button className='btn5' onClick={() => {setVis2(!vis2); if(more2==='More'){ setMore2('Less');} else setMore2('More')}}> Read {more2}</button>
      </article>
      <article>
        <h1 >Maximizing Your Gym Time for Results</h1>
        <h2> Author : <i>Farhan</i> </h2>
        <p>Are you spending long hours at the gym but not seeing the results you desire? It's time to optimize your gym time for maximum efficiency. In this blog, we'll explore strategies and principles to help you get the most out of your workouts and reach your fitness goals.</p>
        <br />
        {
          vis3 ? <p> <h3> 1. The Importance of Structured Workouts :

          </h3>o continue seeing results, you must progressively increase the intensity of your workouts. This can be achieved by adding weight, increasing repetitions, or reducing rest periods between sets. Keep pushing your limits while maintaining proper form.
            <br />
            <br />
            <h3>  2. Intensity and Progression : </h3>o continue seeing results, you must progressively increase the intensity of your workouts. This can be achieved by adding weight, increasing repetitions, or reducing rest periods between sets. Keep pushing your limits while maintaining proper form.
            <br />
            <br />
            <h3> 3. Variety and Cross-Training : </h3>Avoid plateaus by incorporating variety into your workouts. Include different exercises, training styles, and equipment to challenge your body and prevent monotony. Cross-training not only prevents boredom but also helps prevent overuse injuries.
            <br />
            <br />
            <h3> 4. Prioritize Recovery : </h3>Recovery is as crucial as the workout itself. Make sure you get enough sleep, stay hydrated, and practice active recovery techniques like stretching and foam rolling. Allow your muscles time to repair and grow.
            <br />
            <br />
            <h3> 5. Consistency and Patience : </h3>Consistency is key to success. Stick to your workout plan and give your body time to adapt and change. Be patient with yourself and remember that progress takes time..</p> : null
        }
        <br />
        <button className='btn5' onClick={() => {setVis3(!vis3); if(more3==='More'){ setMore3('Less');} else setMore3('More')}}> Read {more3}</button>
      </article>
    </section>
    <Footer />
    </>
  );
}

export default Blogs;
