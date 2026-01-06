// =============== symantic vs non symantic elements in htlm ==========

Semantic elements in HTML are tags that clearly describe the meaning or purpose of the content they contain to both the browser and the developer [1]. 
They provide context and make the code more readable and accessible


// Semantic Elements in HTML

// Semantic HTML improves accessibility, SEO (Search Engine Optimization), and code maintainability by using tags that communicate the structure and meaning of the content [1]. 
// Examples of semantic elements include:
// <header>: Defines the introductory content or a group of navigational links for a section or page [1].
// <nav>: Defines a block of navigation links [1].
// <main>: Specifies the main content of the document [1].
// <article>: Encloses independent, self-contained content, like a blog post or a news story [1].
// <section>: Groups thematically related content into a distinct section [1].
// <aside>: Represents content that is tangentially related to the content around it, often a sidebar [1].
// <footer>: Defines the footer for a document or a section [1].
// <img>: While all HTML tags have syntax, the <img> tag is semantic because it clearly describes its purpose: displaying an image [1]. 


// Non-semantic elements: These tags define a division of content without describing what is in them. 
// Examples of non-semantic elements are:
// <div>: A general container for flow content with no inherent meaning [1].
// <span>: An inline container for phrasing content with no inherent meaning [1]. 
// These elements are often used when no other semantic element is appropriate, typically for styling purposes in conjunction with CSS [1]. 



// ============ css selectors and their spcificity ===========
// CSS selectors are patterns used to select the HTML elements you want to style. They can be broadly divided into five categories, which can also be combined for more specific targeting. 

// The main types of CSS selectors are:
// Simple Selectors:                         Select elements based on name, ID, or class.
// Element/Type Selector:                  Selects all elements of a given HTML tag name, e.g., p { } for all paragraphs.
// Class Selector:                         Selects elements with a specific class attribute, denoted by a period (.) followed by the class name, e.g., .intro { }.
// ID Selector:                            Selects the single element with a specific, unique id attribute, denoted by a hash (#) followed by the ID name, e.g., #main-header { }.
// Universal Selector:                     Selects all elements on the page, denoted by an asterisk (*), e.g., * { }.
// Grouping Selector:                      Selects multiple elements with the same style definitions by separating each selector with a comma, e.g., h1, h2, p { }.

// 
// CSS specificity is the algorithm browsers use to determine which style declaration is most relevant to an element when multiple rules conflict. 
// Each selector type is assigned a weight, and the selector with the highest combined weight "wins".

// Inline styles are often considered a separate, highest category that overrides all other standard selectors. 

// Selector                                    Type 	Example	Weight (a-b-c)
// Inline                                      Styles	<p style="color: blue;">	(1-0-0-0)*
// IDs	                                        #navbar	(0-1-0-0)
// Classes, Attributes, Pseudo-classes	.test, [type="text"], :hover	(0-0-1-0)
// Elements and Pseudo-elements	              h1, ::before	(0-0-0-1)
// Universal Selector and Combinators	        *, +, >, ~, :where()	(0-0-0-0)

// =========== css =============

// ------- Difference between document.queyselector and document.getelementbyid.
// The main difference is that document.getElementById() only selects a single element by its unique ID, 
// while document.querySelector() can select elements using any valid CSS selector (ID, class, tag name, etc.) and returns only the first matching element. 

// -------- What queyselector(div) will return.

// When you use document.querySelector('div'), it will return the first element in the document that is a <div> tag.
// Here are the specific rules for how it behaves:
// 1. It only returns one elementEven if your page has fifty <div> tags, querySelector stops searching as soon as it finds the very first match in the DOM tree (reading from top to bottom).
// 2. The return valueA Single Element: If at least one <div> exists, you get that specific Element object.null: 
// If there are no <div> tags on the page, it returns null.

// Comparison: querySelector vs querySelectorAllIf you need to interact with more than just the first div, you have to use a different method.MethodSelectionReturn TypequerySelector('div')The first <div> found.A single ElementquerySelectorAll('div')Every <div> on the page.A NodeList (similar to an array)


// --------- Css display block property ----- 

The display: block property is the foundation of web layout. When an element is set to block, it behaves like a physical box that claims its own territory on the page.
By default, elements like 
  <div>, 
  <h1> through <h6>, 
  <p>, 
  <ul>, and 
  <section> 
  
are block-level elements.

Core Characteristics of block
1. The "Full Width" Rule
A block element automatically expands to fill the entire width of its parent container, even if the content inside is very small. 
  It’s like a person sitting in the middle of a long park bench—no one else can sit on that bench with them.

2. The "New Line" Rule
Block elements always start on a new line. Any element that comes after a block element will also be pushed to a new line.

3. Sizing and Spacing
Unlike inline elements, block elements fully respect all box-model properties:

Width & Height: You can set specific dimensions (e.g., width: 200px;).
Padding: Space inside the element is respected on all four sides.
Margins: Space outside the element is respected on all four sides, allowing you to push other elements away.

Common Use Cases
Creating Layout Sections
Because block elements take up the full width, they are perfect for creating the "skeleton" of a website, such as headers, footers, and main content areas.

  css

header {
  display: block; /* Default for header */
  background-color: #333;
  color: white;
  padding: 20px;
}

Turning Links into Buttons
By default, an <a> tag is inline, meaning you can only click the text itself. 
If you change it to display: block, the entire width of the container becomes clickable.

Margin Auto Trick
One of the most famous uses of display: block is centering an element horizontally. 
If a block element has a fixed width, you can center it by setting the left and right margins to auto.

CSS

.centered-box {
  display: block;
  width: 50%;
  margin: 0 auto; /* Centers the div horizontally */
}

Comparison Summary
Block: Starts a new line, occupies full width, respects all sizing.
Inline: Stays on the same line, size depends on content, ignores width/height.
Inline-Block: Stays on the same line, but respects width/height.

Would you like to see how Flexbox (display: flex) changes these rules to allow block elements to sit side-by-side more easily?
To fix the "white-space gap" between inline-block elements, you first have to understand why it happens. 
Because inline-block treats elements like words, the browser sees the Enter key or Space in your code as a literal space between words.

Here are the three most common ways to fix it:

1. The "Parent Font-Size" Hack (Most Common)
Since the gap is technically a "space character," you can make that character disappear by setting the parent's font size to zero, then resetting it for the children.

CSS

.parent {
  font-size: 0; /* Shrinks the 'space' character to 0px */
}

.child {
  display: inline-block;
  font-size: 16px; /* You must set the font-size back for the actual text */
  width: 100px;
  height: 100px;
  background: tomato;
}
2. The HTML "Closing Tag" Trick
If you don't want to use CSS hacks, you can remove the physical space in your HTML file. It looks a bit messy, but it works perfectly.

HTML

<div class="child"></div><div class="child"></div>

<div class="child"
></div><div class="child"></div>
3. The Modern Fix: Flexbox
In modern web development, we rarely use inline-block for layouts anymore. Flexbox handles side-by-side elements perfectly without any weird gaps.

CSS

.parent {
  display: flex; /* No gaps by default! */
  gap: 10px;    /* You can precisely control the space if you want one */
}
Summary Checklist
Inline: Good for styling text inside a paragraph.

Block: Good for major sections (Headers, Divs).

Inline-Block: Good for buttons or small side-by-side items, but watch for the 4px gap.

Flexbox: The modern standard for almost all side-by-side layouts.

Would you like to try a quick Flexbox exercise to see how it replaces inline-block?

// -------- difference between inline-block, block and inline

To understand the difference, it helps to look at how each property handles two things: layout (where the element sits) and sizing (how big it can be).
  
  The Comparison TableFeatureblockinlineinline-blockNew Line?Yes (starts on a new line)No (sits next to others)No (sits next to others)Width/HeightYes (can be set)No (ignored)Yes (can be set)Default Width100% of parentOnly as wide as contentOnly as wide as contentVertical MarginsFully respectedIgnored (doesn't push others)Fully respectedCommon Example<div>, <h1>, <p><span>, <a>, <strong>Buttons, navigation links
  
1. display: block
  
  Think of this as a "Building Block." It is selfish; it wants the entire horizontal row to itself.
  Flow: It always forces a line break before and after it.
    Sizing: You can control its width and height. If you don't set a width, it automatically expands to fill the container (100%).3+1
2. display: inline
  Think of this as "Text." It behaves like a single word in a paragraph 
    Flow: It stays on the same line as other elements.
    Sizing: You cannot set a width or height.It is only as big as the content inside it.
    Spacing: While you can add horizontal padding/margins, vertical ones won't push other elements away—they might even overlap the lines above or below.
3. display: inline-block
  This is the "Best of Both Worlds." It is essentially an inline element that has "block powers."
    Flow: It stays on the same line as other elements (like inline).
      Sizing: It allows you to set a custom width and height (like block).
      Spacing: It respects all margins and padding (top, bottom, left, right), making it the perfect choice for creating buttons or grid-like layouts that need to sit side-by-side.
      
      A Simple Analogy
    Block: A brick. It's solid, you can choose its size, but you have to stack them on top of each other.
      Inline: A piece of string. It flows with the text and wraps around, but you can't really set a fixed "width" for one part of the string.
      Inline-Block: A LEGO brick. You can choose its exact size, but you can also place them side-by-side in a row.
      
      CSS tutorial : Inline vs inline-block vs block in CSS. CSS display property.
  This video provides a visual demonstration of how these three display values change the behavior of elements on a live webpage.

// --------- I have a div element what if we style in line element.

If you change a <div> to display: inline, it stops behaving like a "container" and starts behaving like a word in a sentence.
By default, a <div> is a block element (it takes up the full width and starts on a new line). When you set it to display: inline, several major changes happen:

1. Width and Height are Ignored
  This is the most significant change. Even if you explicitly write width: 500px; and height: 500px; in your CSS, the browser will ignore those values. 
  An inline element’s size is determined strictly by its content (the text or images inside it).
2. No New Line
    The div will no longer push the elements below it to a new line. It will sit side-by-side with whatever comes before or after it, just like a <span> or an <a> tag.
3. Margin and Padding Issues
      Horizontal (Left/Right): Margins and padding will work normally.
      Vertical (Top/Bottom): Padding and margins will appear on the screen, but they will not push other elements away. 
      They might overlap the lines of text above or below them.

Comparison: 
                    Block                         vs.                     Inline
Propertydisplay: block (Default)                              display: inline
  
Width        Fills 100% of parent width                Only as wide as the content
New Line    Always starts on a new line              Sits on the same line
Sizing      Respects width and height                Ignores width and height

//  --------- for Inline block element, can we set width and height.

Yes, you absolutely can.
One of the primary reasons developers use display: inline-block is specifically to have the ability to set a width and height on an element that still flows like text.

  // -------- flexbox vs grid layout------




  {/* =========== media quieries */}




  @media screen and (min-width: 768px) {
  body {
    background-color: blue;
    color: white;
  }
}

/* For devices with a minimum width of 992px (Large) */
@media screen and (min-width: 992px) {
  body {
    background-color: tan;
    color: black;
  }
