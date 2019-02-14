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
    public void step() {
//        WebDriver myDriver;

        System.out.println(" I am in GIVEN");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\jayav\\Downloads\\selenium\\chromedriver.exe");
        myDriver = new ChromeDriver();
    }

    @When("^I access Argos url$")
    public void step1() {
        System.out.println(" I am in WHEN");
        myDriver.get("https://www.Argos.co.uk/");
    }

    @Then("^I see Argos homepage$")
    public void step2() {
        System.out.println("I am in THEN");
        System.out.println(myDriver.getTitle());
        Assert.assertEquals(true, myDriver.getTitle().contains("Argos"));
        myDriver.quit();
    }


    @When("^I access Amazon url$")
    public void step3() {
        System.out.println(" I am in WHEN");
        myDriver.get("https://www.Amazon.co.uk/");
    }

    @Then("^I see Amazon homepage$")
    public void step4() {
        System.out.println("I am in THEN");
        System.out.println(myDriver.getTitle());
        Assert.assertEquals(true, myDriver.getTitle().contains("Amazon"));
        myDriver.quit();
    }


    @When("^I access Hsbc url$")
    public void step5() {
        System.out.println(" I am in WHEN");
        myDriver.get("https://www.Hsbc.co.uk/");
    }

    @Then("^I see Hsbc homepage$")
    public void step6() {
        System.out.println("I am in THEN");
          System.out.println(myDriver.getTitle());
        Assert.assertEquals(true, myDriver.getTitle().contains("Hsbc"));
        myDriver.quit();
    }

//
//    @When("^I access Google url$")
//    public void step7() {
//        System.out.println(" I am in WHEN");
//        //   myDriver.get("https://www.Google.co.uk/");
//    }
//
//    @Then("^I see Google homepage$")
//    public void step8() {
//        System.out.println("I am in THEN");
//        System.out.println(myDriver.getTitle());
////        Assert.assertEquals(true, myDriver.getTitle().contains("Google"));
//        myDriver.quit();
//    }


    @When("^I access \"([^\"]*)\" Website$")
    public void step9(String arg) {
       myDriver.get(arg);
    }

    @Then("^I can see \"([^\"]*)\" homepage$")
    public void step10(String arg) {

    }

}


