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
        <img src="/img5.jpg" alt="workout" className="rounded-lg shadow-lg w-full max-h-72 object-cover" />
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
            <h4>Live Performance Tracking</h4>
            <p>
            Track your workout stats in real-time, including reps, sets, heart rate, and calories burned, ensuring measurable progress with every session.
            </p>
          </div>
          <div>
            <h4>Community Leaderboards & Rewards</h4>
            <p>
            Stay motivated by competing with fellow members, earning badges, and unlocking rewards for hitting fitness milestones.
            </p>
          </div>
          <div>
            <h4>Flexible Scheduling & On-Demand Workouts</h4>
            <p>
            Train at your convenience with live classes and a library of on-demand workout sessions that fit your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
