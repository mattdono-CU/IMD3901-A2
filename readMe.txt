Author: Matthew Donoghue
Date: Feb. 10, 2019
Course: IMD39001B
Assignment: 2

A2 - Multi-Device Interactions

Overview:
I created an virtual enclosed space where users can create a maximum of 10 glowing bubbles by clicking a button located in the virtual space. The bubbles behave naturally as they float through the space, bouncing off the environment and each other. Users have a reticle in the center of their screen that they can use to push the bubbles around the space themselves by clicking and dragging on their desktop screen or by utilizing the gyroscopic sensors on their mobile phone device. User's can also pop bubbles by clicking/tapping on them directly. This was done to simulate the satisfying feeling of hitting the bubbles/balloons your hands or a stick and watching how they interact with each other.

Challenges:
The components that presented the greatest challenge were implementing dynamic physics and creating/destroying objects. It look a lot of time to wrap my head around how I would go about coding physical interactions, like bouncing, in 3D space. I started testing interactions using equations from physics and linear algebra but quickly lost myself in the numbers and code, being unfamiliar with Javascript didn't help either. I was fortunate to have stumbled across a the "aframe-physics-system" component by Don McCurdy while doing research on the matter which greatly helped me achieve my design goals. Similarly, creating and destroying objects took some tweaking to get working as intended. I ran into issues where two bubbles would be created inside one another and cause some unexpected physical behaviour and would not be deleted properly when trying to "pop" them. In the end I made sure to refer back to the example done in class, as well as a variety A-Frame documentation, to verify my methods. Looking back, the problems seem minor but I guess everything is easer in retrospect.

Successes:
I am most pleased with the feeling of the physical interactions with the bubbles and how they look moving around the scene. I played around with different values for gravity and restitution (bounciness) before settling on a combination that felt natural and satisfying. I spent more time than probably necessary adjusting the lighting effects on the bubbles but I am extremely pleased with the outcome. Overall, I am very happy with how the colors, sound effects, music, and interactions all come together to make a simple yet enjoyable immersive experience that most people could try out on their smart phone.