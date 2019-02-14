package Steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**public class Hooks {
    static WebDriver myDriver;
static int x = 0;
    @Before
    public void beforeScenario(){
        if(x==0) {
            System.setProperty("webdriver.chrome.driver", "C:\\Users\\jayav\\Downloads\\selenium\\chromedriver.exe");
            x = 1;
        }
        myDriver = new ChromeDriver();
    }

    @After
    public void afterScenario(){
        myDriver.quit();
/*
    }
}
