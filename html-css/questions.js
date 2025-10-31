
// ---------html--------------

//------------Have you heard about semantic tags

// semantic tags are HTML elements that convey meaning about the content they contain, both to developers and browsers. 
// They help improve the structure and accessibility of web pages by clearly defining the purpose of different sections of content. 
// Examples of semantic tags include <header>, <footer>, <article>, <section>, <nav>, and <aside>. 
// Using semantic tags enhances SEO and makes it easier for screen readers to interpret the content for users with disabilities.




// -------------What are meta tags?
// meta tags are HTML elements that provide metadata about a web page. 
// They are placed within the <head> section of an HTML document and are not displayed on the page itself. 
// Meta tags can include information such as the character set, page description, keywords for search engines, author of the document, and viewport settings for responsive design. 
// Common meta tags include 
{/* <meta charset="UTF-8">, 
<meta name="description" 
content="A brief description of the page">, and 
<meta name="viewport" 
content="width=device-width, initial-scale=1.0">.  */}
// Meta tags play a crucial role in SEO and ensuring that web pages are displayed correctly across different devices.



// Tell me what are Flex and its properties.

// What are the positions and types in CSS?
// positions in CSS determine how an element is positioned in the document. There are five main types of positioning:

// 1. Static: This is the default position for all elements. Elements are positioned according to the normal flow of the document.

// 2. Relative: The element is positioned relative to its normal position. You can use the top, right, bottom, and left properties to adjust its position.

// 3. Absolute: The element is positioned relative to its nearest positioned ancestor (an ancestor with a position other than static). If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).

// 4. Fixed: The element is positioned relative to the viewport, which means it stays in the same place even when the page is scrolled.

// 5. Sticky: The element is treated as relative until it crosses a specified threshold (defined by top, right, bottom, or left), at which point it becomes fixed.     

// types in CSS refer to the different ways elements can be displayed on a web page. The main display types are:

// 1. Block: Elements that take up the full width available and start on a new line (e.g., <div>, <p>).

// 2. Inline: Elements that take up only as much width as necessary and do not start on a new line (e.g., <span>, <a>).

// 3. Inline-block: Elements that are similar to inline elements but can have width and height set (e.g., <img>).

// 4. Flex: A layout model that allows for responsive alignment and distribution of space among items in a container, even when their size is unknown or dynamic.

// 5. Grid: A layout model that allows for the creation of complex grid-based layouts with rows and columns.


// ------------- Where do we have to use absolute and where do we have to use relative positions?
// Use relative positioning when you want to adjust the position of an element slightly from its normal flow without removing it from the document flow.
// This is useful for small tweaks in layout, such as nudging an element a few pixels up, down, left, or right.

// Use absolute positioning when you need to place an element in a specific location on the page, independent of the normal document flow.
// This is useful for creating overlays, tooltips, or when you want an element to be positioned relative to a specific ancestor element.

// --------------- What are Box model in CSS?
// box model in CSS is a fundamental concept that describes how elements are structured and how their dimensions are calculated on a web page. It consists of four main components:
// 1. Content: The innermost part of the box where the actual content (text, images, etc.) is displayed. The size of the content area can be controlled using properties like width and height.
// 2. Padding: The space between the content and the border. Padding creates extra space inside the element, increasing the overall size of the box without affecting the content size. It can be set using properties like padding-top, padding-right, padding-bottom, and padding-left.
// 3. Border: The line that surrounds the padding (if any) and content. The border's thickness, style, and color can be customized using properties like border-width, border-style, and border-color.
// 4. Margin: The outermost layer that creates space between the element and other elements on the page. Margins are used to separate elements from each other and can be set using properties like margin-top, margin-right, margin-bottom, and margin-left.
// The total size of an element is calculated by adding the width and height of the content, padding, border, and margin. Understanding the box model is essential for effective layout design and spacing in web development.     


