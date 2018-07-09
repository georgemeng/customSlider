#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
source("customSlider.R")

# Define UI for application that draws a histogram
ui <- fluidPage(
   
   # Application title
   titlePanel("Custom Slider - Custom Slider plus JS/CSS"),
   
   # Sidebar with a slider input for number of bins 
   sidebarLayout(
      sidebarPanel(
         customSlider("bins",
                     "Number of bins:",
                     min = 1,
                     max = 10,
                     value = 3,
                     step = 0.05,
                     ticks = FALSE),
         customSlider("bins2",
                      "Number of bins:",
                      min = 10,
                      max = 100,
                      value = 30,
                      step = 0.05,
                      ticks = FALSE)
      ),
      
      # Show a plot of the generated distribution
      mainPanel(
         includeHTML("customSlider.css"),
         includeHTML("customSlider.js"),
         plotOutput("distPlot"),
         plotOutput("distPlot2")
      )
   )
)

# Define server logic required to draw a histogram
server <- function(input, output) {
   
  output$distPlot <- renderPlot({
    # generate bins based on input$bins from ui.R
    x    <- faithful[, 2] 
    bins <- seq(min(x), max(x), length.out = input$bins + 1)
    
    # draw the histogram with the specified number of bins
    hist(x, breaks = bins, col = 'darkgray', border = 'white')
  })
  output$distPlot2 <- renderPlot({
    # generate bins based on input$bins from ui.R
    x    <- faithful[, 2] 
    bins <- seq(min(x), max(x), length.out = input$bins2 + 1)
    
    # draw the histogram with the specified number of bins
    hist(x, breaks = bins, col = 'darkgray', border = 'white')
  })
}

# Run the application 
shinyApp(ui = ui, server = server)

