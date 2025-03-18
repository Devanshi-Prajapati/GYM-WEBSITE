import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Join Our Exclusive Bootcamps for Ultimate Transformation
        Push your limits with our specialized bootcamps, focusing on strength, agility, and endurance.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Fat-Burning HIIT Camp
        Experience a fast-paced High-Intensity Interval Training (HIIT) session that helps you torch calories and boost metabolism.
        </p>
        <div className="bootcamps">
          <div>
            <h4> Strength & Conditioning Program</h4>
            <p>
            Build muscle and improve overall fitness with resistance training and expert coaching.
            </p>
          </div>
          <div>
            <h4>Mind & Body Yoga Retreat</h4>
            <p>
            A perfect blend of yoga, meditation, and mindfulness to help you relieve stress and improve flexibility.
            </p>
          </div>
          <div>
            <h4>Endurance & Stamina Builder</h4>
            <p>
            Take on our endurance bootcamp designed to enhance cardiovascular fitness and stamina.
            </p>
          </div>
          <div>
            <h4>Personalized Progress Tracking</h4>
            <p>
            Our bootcamps provide real-time progress tracking with AI-powered analytics, allowing you to monitor your heart rate, calories burned, and performance improvements. Stay motivated and see tangible results!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
