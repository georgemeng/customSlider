# customSlider

For the custom sliderInput test, there are a couple options, I ended up with 4 working solutions.

1) use jQuery + css + numericInput to implement the slider. The downside is that it is not a true component.

	The working URL is https://georgemeng.shinyapps.io/CustomSlider/

2) use jQuery + css + textInput. 
   
	This is almost the same as the solution 1, the only difference is that this is using textInput, so we could enter any text in the textInput.
	The working URL is https://georgemeng.shinyapps.io/CustomSlider2/
   
3) Extend existing sliderInput component + JS/CSS, JS/CSS is loaded at ui not the component

	The working URL is https://georgemeng.shinyapps.io/CustomSlider3/

4) Extend existing sliderInput component, merge JS/CSS into component, so it is easy for user to use the component.

	The working URL is https://georgemeng.shinyapps.io/CustomSlider4/

In all above running applications I created two slider instances in order to test out the solution will be working in real world case.  
