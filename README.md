# Javascript
description

## CSS -> flexbox

There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is __justify-content: center;__, which aligns all the flex items to the center inside the flex container. Others options include:

* __flex-start__: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no justify-content is specified.
* __flex-end__: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
* __space-between__: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.
* __space-around__: similar to space-between but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.
* __space-evenly__: Distributes space evenly between the flex items with a full space at either end of the flex container

- - -

The __align-items__ property is similar to justify-content. Recall that the __justify-content__ property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.

Flex containers also have a cross axis which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

CSS offers the align-items property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.

The different values available for align-items include:

* flex-start: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
* flex-end: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
* center: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
* stretch: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no align-items value is specified.
* baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

<https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-align-items-property-in-the-tweet-embed>

- - - 

CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.

However, __flex-wrap__ property tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

CSS also has options for the direction of the wrap:

* __nowrap__: this is the default setting, and does not wrap items.
* __wrap__: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
* __wrap-reverse__: wraps items from right-to-left if they are in a row, or bottom-to-top if they are in a column.

- - - - -

So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.

1. The first is the __flex-shrink__ property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

The flex-shrink property takes numbers as values. The higher the number, the more it will shrink     compared to the other items in the container. For example, __if one item has a flex-shrink value of   1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times   as much as the other.__


2. The opposite of __flex-shrink__ is the __flex-grow__ property. Recall that flex-shrink controls the size of the items when the container shrinks. The flex-grow property controls the size of items when the parent container expands.

Using a similar example from the last challenge, __if one item has a flex-grow value of 1 and the ?other has a flex-grow value of 3, the one with the value of 3 will grow three times as much as the other.__

3. The __flex-basis__ property specifies the initial size of the item before CSS makes adjustments with flex-shrink or flex-grow.

The units used by the flex-basis property are the same as other size properties (px, em, %, etc.). The value auto sizes items based on the content.

⫸ There is a shortcut available to set several flex properties at once. The flex-grow, flex-shrink, and flex-basis properties can all be set together by using the flex property.

For example, __flex: 1 0 10px;__ will set the item to flex-grow: 1;, flex-shrink: 0;, and flex-basis: 10px;.

The default property settings are flex: 0 1 auto;.

- - -

The __order__ property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.

<https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/use-the-order-property-to-rearrange-items>

- - -
The final property for flex items is __align-self__. This property allows you to adjust each item's alignment individually, instead of setting them all at once. *This is useful since other common adjustment techniques using the CSS properties float, clear, and vertical-align do not work on flex items.*

__align-self__ accepts the same values as align-items and will override any value set by the align-items property.

MDN: <https://developer.mozilla.org/en-US/docs/Web/CSS/align-self>

- - - 

### CSS -> GRID

Turn any HTML element into a grid container by setting its display property to __grid__. This gives you the ability to use all the other properties associated with CSS Grid.

Note: In CSS Grid, the parent element is referred to as the container and its children are called items.

- - -

Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the __grid-template-columns__ property on a grid container as demonstrated below:

```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}

```

-> This will give your grid two columns that are each 50px wide. The number of parameters given to the grid-template-columns property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.


The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the __grid-template-rows__ property in the same way you used grid-template-columns in previous challenge.

- - -

You can use absolute and relative units like __px__ and __em__ in CSS Grid to define the size of rows and columns. You can use these as well:

*  __fr__: sets the column or row to a fraction of the available space,

* __auto__: sets the column or row to the width or height of its content automatically,

* __%__: adjusts the column or row to the percent width of its container.

Here's the code that generates the output in the preview:

```
grid-template-columns: auto 50px 10% 2fr 1fr;
```

This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

- - -

So far in the grids you have created, the columns have all been tight up against each other. Sometimes you want a gap in between the columns. To add a gap between the columns, use the __grid-column-gap__ property like this:

```
grid-column-gap: 10px;
```
This creates 10px of empty space between all of our columns.

You can add a gap in between the rows of a grid using __grid-row-gap__ in the same way that you added a gap in between columns in the previous challenge.

__grid-gap__ is a shorthand property for __grid-row-gap__ and __grid-column-gap__ from the previous two challenges that's more convenient to use. If grid-gap has one value, it will create a gap between all rows and columns. 
*However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.*

- - -

Up to this point, all the properties that have been discussed are for grid containers. 
The __grid-column__ property is the first one for use on the grid items themselves.

The hypothetical horizontal and vertical lines that create the grid are referred to as lines. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.

This is what the lines look like for a 3x3 grid:

To control the amount of columns an item will consume, you can use the __grid-column__ property in conjunction with the line numbers you want the item to start and stop at.

Here's an example:

```
grid-column: 1 / 3;

// start / end
```
This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns

<https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-column-to-control-spacing> 


Of course, you can make items consume multiple rows just like you can with columns. You define the horizontal lines you want an item to start and stop at using the __grid-row__ property on a grid item.

- - -

In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the __justify-self__ property on a grid item. By default, this property has a value of __stretch__, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

* __start__: aligns the content at the left of the cell,

* __center__: aligns the content in the center of the cell,

* __end__: aligns the content at the right of the cell.


Just as you can align an item horizontally, there's a way to align an item vertically as well. To do this, you use the __align-self__ property on an item. This property accepts all of the same values as justify-self from the last challenge.


Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using __justify-items__ on your grid container. This property can accept all the same values you learned about in the previous two challenges, the difference being that it will move all the items in our grid to the desired alignment.

```
justigy-items: center;
```

Using the __align-items__ property on a grid container will set the vertical alignment for all the items in our grid.


- - -

You can group cells of your grid together into an area and give the area a custom name. Do this by using __grid-template-areas__ on the container like this:

```
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named header, the bottom three cells into a footer area, and it makes two areas in the middle row; advert and content. Note: Every word in the code represents a cell and every pair of quotation marks represent a row. In addition to custom labels, you can use a period (.) to designate an empty cell in the grid.


- - -

After creating an area's template for your grid container, as shown in the previous challenge, you can place an item in your custom area by referencing the name you gave it. To do this, you use the __grid-area__ property on an item like this:

```
.item1 {
  grid-area: header;
}
```

This lets the grid know that you want the item1 class to go in the area named header. In this case, the item will use the entire top row because that whole row is named as the header area.



The __grid-area__ property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

```
item1 { grid-area: 1/1/2/4; }
```

This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:
```
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.

- - -

When you used __grid-template-columns__ and __grid-template-rows__ to define the structure of a grid, you entered a value for each row or column you created.

Let's say you want a grid with 100 rows of the same height. It isn't very practical to insert 100 values individually. Fortunately, there's a better way - by using the __repeat__ function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.

Here's an example that would create the 100 row grid, each row at 50px tall.

```
grid-template-rows: repeat(100, 50px);
```

You can also repeat multiple values with the repeat function and insert the function amongst other values when defining a grid structure. Here's what that looks like:
```
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

This translates to:
```
grid-template-columns: 1fr 50px 1fr 50px 20px;
```
Note: The 1fr 50px is repeated twice followed by 20px.


- - -

There's another built-in function to use with __grid-template-columns__ and __grid-template-rows__ called minmax. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

```
grid-template-columns: 100px minmax(50px, 200px);
```

In the code above, grid-template-columns is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.


The __repeat__ function comes with an option called __auto-fill.__ This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining auto-fill with minmax, like this:

```
repeat(auto-fill, minmax(60px, 1fr));
```

When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. Note: If your container can't fit all your items on one row, it will move them down to a new one.


- - -

__auto-fit__ works almost identically to __auto-fill.__ The only difference is that when the container's size exceeds the size of all the items combined, __auto-fill__ keeps inserting empty rows or columns and pushes your items to the side, while __auto-fit__ collapses those empty rows or columns and stretches your items to fit the size of the container.

Note: If your container can't fit all your items on one row, it will move them down to a new one.
