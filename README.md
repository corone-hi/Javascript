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
