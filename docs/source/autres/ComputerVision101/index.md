# Computer Vision 101

- [Computer Vision 101](#computer-vision-101)
  - [Ressources](#ressources)
    - [Tools](#tools)
    - [IBM Course](#ibm-course)
  - [Image Manipulation](#image-manipulation)
    - [Filters Algorithm](#filters-algorithm)
    - [Gray filter](#gray-filter)
      - [Hough Lines](#hough-lines)
    - [Binary Filter](#binary-filter)
    - [Contour Filter](#contour-filter)
      - [Retrieval Modes (cv2.RETR\_\*)](#retrieval-modes-cv2retr_)
      - [Approximation Methods (cv2.CHAIN\_APPROX\_\*)](#approximation-methods-cv2chain_approx_)
  - [AI Algorithms](#ai-algorithms)
    - [KNN (K-Nearest Neighbors)](#knn-k-nearest-neighbors)

## Ressources

### Tools 
Image Manipulation: Pillow (Python), OpenCV.

### IBM Course
https://learning.edx.org/course/course-v1:IBM+CV0101EN+1T2021/home


## Image Manipulation

### Filters Algorithm

### Gray filter

- Why Converting to Grayscale is Better for Edge Detection

  - Simpler computation: Grayscale has a single channel (intensity) instead of three (RGB), reducing processing time by ~3x.

  - Focus on intensity changes: Edges are primarily defined by intensity changes, not color transitions. Grayscale preserves these structural boundaries.

  - Reduced noise sensitivity: Color channels can have different noise profiles. Grayscale combines information from all channels, effectively averaging out some noise.

  - Algorithm optimization: Many edge detection algorithms, including Canny, were specifically designed for grayscale images.

  - Memory efficiency: Grayscale requires only 1/3 the memory of RGB, important for real-time processing in systems with limited resources.

#### Hough Lines 

Easily detect lines in image, noisy resistant. 


watch : https://youtu.be/XRBc_xkZREg?si=8gwaTZNMXrR7qD4b

```python
# 3. Hough Line Transform: Detect lines in the edge map
#    - edges: Input edge image.
#    - 1: Rho resolution (distance accuracy in pixels). Distance from origin (0,0).
#    - np.pi/180: Theta resolution (angle accuracy in radians). 1 degree steps. Angle of the normal vector.
#    - 100: Accumulator threshold. Min number of edge points needed to form a line. CRITICAL tuning parameter.
lines = cv2.HoughLines(edges, 1, np.pi/180, 100)

# 4. Line Interpretation and Drawing
if lines is not None:
    for rho, theta in lines[:1, 0]:  # Process only the first detected line [[rho, theta]]

        # rho: Perpendicular distance from origin (0,0) to the line.
        # theta: Angle of the normal vector from origin to the line (in radians).

        # Calculate cosine and sine of the angle
        a = np.cos(theta)
        b = np.sin(theta)

        # Find a point (x0, y0) on the line (closest point to origin)
        # Based on the line equation: rho = x*cos(theta) + y*sin(theta)
        x0 = a * rho
        y0 = b * rho

        # Calculate two endpoints (x1, y1) and (x2, y2) far outside the image
        # to draw a line segment spanning the entire image width/height.
        # We move along the direction *parallel* to the line from (x0, y0).
        # The vector (-b, a) is perpendicular to (a, b), hence parallel to the line.
        # 1000 is an arbitrary large number to ensure endpoints are off-screen.
        x1 = int(x0 + 1000 * (-b))
        y1 = int(y0 + 1000 * (a))
        x2 = int(x0 - 1000 * (-b))
        y2 = int(y0 - 1000 * (a))

        # Draw the detected line (red color, thickness 2) onto the copy image
        cv2.line(lines_image, (x1, y1), (x2, y2), (0, 0, 255), 2)
```

### Binary Filter

```python
contour_img = np.copy(frame)
_, binary = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)
```

### Contour Filter

```python
contours, _ = cv2.findContours(binary, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
for contour in contours:
if cv2.contourArea(contour) > 50:  # Min area filter
cv2.drawContours(contour_img, [contour], 0, (0, 255, 0), 2)
```


```
Original Image:          Binary Image:           Detected Contour:
                  
   ⬜⬜⬜⬜⬜             ⬜⬜⬜⬜⬜                ⬜⬜⬜⬜⬜
   ⬜🟦🟦🟧⬜             ⬜⬛⬛⬛⬜                ⬜🟢🟢🟢⬜
   ⬜🟦🟪🟪⬜    →        ⬜⬛⬛⬛⬜       →        ⬜🟢⬛🟢⬜
   ⬜🟪🟧🟧⬜             ⬜⬛⬛⬛⬜                ⬜🟢🟢🟢⬜
   ⬜⬜⬜⬜⬜             ⬜⬜⬜⬜⬜                ⬜⬜⬜⬜⬜
```

#### Retrieval Modes (cv2.RETR_*)

These determine *which* contours to retrieve:

1. **cv2.RETR_EXTERNAL** (what you're using): 
   - Only retrieves the outermost contours
   - Ignores holes inside objects
   - Like drawing only around the outer edge of a donut, ignoring the hole

2. **cv2.RETR_LIST**:
   - Retrieves all contours without establishing any hierarchy
   - Like drawing around the outer edge of a donut AND its hole, but not relating them

3. **cv2.RETR_TREE**:
   - Retrieves all contours and organizes them in a hierarchy (parent-child relationships)
   - Like drawing around the donut's outer edge and identifying that the hole is "inside" or a "child" of the outer contour

4. **cv2.RETR_CCOMP**:
   - Retrieves all contours and organizes them in a two-level hierarchy
   - All external contours are top level, all contours of holes are second level

#### Approximation Methods (cv2.CHAIN_APPROX_*)

These determine *how* the contours are represented:

1. **cv2.CHAIN_APPROX_SIMPLE** (what you're using):
   - Compresses horizontal, vertical, and diagonal segments, keeping only their end points
   - For a square, it would store just 4 points (the corners) instead of all points along the perimeter
   - Memory efficient, good for most purposes

2. **cv2.CHAIN_APPROX_NONE**:
   - Stores absolutely all contour points
   - For a straight line, it would store all the pixels of the line
   - Uses more memory but preserves complete information

3. **cv2.CHAIN_APPROX_TC89_L1** and **cv2.CHAIN_APPROX_TC89_KCOS**:
   - More advanced contour approximation methods
   - Use algorithms to further optimize the contour representation


## AI Algorithms

### KNN (K-Nearest Neighbors)

KNN is a simple algorithm that classifies data points based on the classes of their nearest neighbors. It is a non-parametric method, meaning it does not make any assumptions about the underlying data distribution. KNN is often used for classification tasks, but it can also be used for regression.

The algorithm works as follows:
1. Choose the number of neighbors (k).
2. For each data point, calculate the distance to all other points in the dataset.
3. Sort the distances and select the k nearest neighbors.

