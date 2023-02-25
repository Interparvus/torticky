// get the div element containing the images
const images = document.querySelectorAll('.animated_background img');

// create an array of image elements
var targetX,targetY, targetRotation;
// set the initial position and rotation of each image randomly
for (let i = 0; i < images.length; i++) {
    const img = images[i];
    img.style.position = 'absolute';
    img.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
    img.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
  }
  
  // set a new random target position and rotation for each image every 5 seconds
  setInterval(() => {
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      img.targetX = Math.random() * (window.innerWidth - 200);
      img.targetY = Math.random() * (window.innerHeight - 200);
      img.targetRotation = Math.random() * 360;
    }
  }, 5000);
  
  // animate all images towards their individual target positions and rotations
  function animate() {
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
  
      // calculate the distance and angle between the current and target positions
      const currentX = parseFloat(img.style.left);
      const currentY = parseFloat(img.style.top);
      const distanceX = img.targetX - currentX;
      const distanceY = img.targetY - currentY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const angle = Math.atan2(distanceY, distanceX);
  
      // calculate the new position of the image using trigonometry
      const speed = 0.01 * distance;
      const newX = currentX + speed * Math.cos(angle);
      const newY = currentY + speed * Math.sin(angle);
  
      // calculate the new rotation of the image
      const currentRotation = parseFloat(img.style.transform.slice(7, -4));
      const rotationDistance = img.targetRotation - currentRotation;
      const rotationSpeed = 0.01 * rotationDistance;
      const newRotation = currentRotation + rotationSpeed;
  
      // set the new position and rotation of the image
      img.style.left = `${newX}px`;
      img.style.top = `${newY}px`;
      img.style.transform = `rotate(${newRotation}deg)`;
    }
  
    // schedule the next animation frame
    requestAnimationFrame(animate);
  }
  
  // start the animation
  animate();