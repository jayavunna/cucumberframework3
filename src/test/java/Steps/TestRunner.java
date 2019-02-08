package Steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="C:\\Users\\jayav\\IdeaProjects\\cucumberframework3\\src\\test\\Features",

        tags = {"@two"},
        glue={"Steps"},
        //format = {"json:target/cucumber.json" +
        //        ""}
        plugin = { "pretty", "html:target/cucumber-reports" },
        monochrome = true
        //plugin = { "pretty", "json:target/cucumber.json" }
)

public class TestRunner {

}
