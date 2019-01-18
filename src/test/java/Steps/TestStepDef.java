package Steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestStepDef {
    WebDriver myDriver;
    //    System.setProperty("webdriver.chrome.driver","./src/test/java/chromedriver");
    @Given("^I am a chrome user$")
    public void step(){
//        WebDriver myDriver;

        System.out.println(" I am in GIVEN");
        System.setProperty("webdriver.chrome.driver","C:\\Users\\jayav\\Downloads\\selenium\\chromedriver.exe");
        myDriver = new ChromeDriver();
    }
    @When("^I access Tesco url$")
    public void step1(){
        System.out.println(" I am in WHEN");
        myDriver.get("https://www.Tesco.com/");
    }
    @Then("^I see Tesco homepage$")
    public void step2(){
        System.out.println("I am in THEN");
        System.out.println(myDriver.getTitle());
        Assert.assertEquals(true,myDriver.getTitle().contains("Tesco"));
        myDriver.quit();
    }
}

