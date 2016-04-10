$output.javaTest($Root,"ApplicationTests")##

$output.require("org.junit.Test")##
$output.require("org.junit.runner.RunWith")##
$output.require("org.springframework.boot.test.SpringApplicationConfiguration")##
$output.require("org.springframework.test.context.junit4.SpringJUnit4ClassRunner")##
$output.require("org.springframework.boot.test.IntegrationTest")##
$output.require("org.springframework.test.context.web.WebAppConfiguration")##

$output.require("org.springframework.beans.factory.annotation.Autowired")##
$output.require("org.springframework.beans.factory.annotation.Value")##

$output.require("com.jaxio.demo.domain.Scr")##
$output.require("com.jaxio.demo.repository.ScrRepository")##

$output.require("org.junit.After")##
$output.require("org.junit.Before")##
$output.require("org.springframework.web.context.WebApplicationContext")##
$output.require("org.springframework.test.web.servlet.MockMvc")##
$output.require("org.springframework.test.web.servlet.setup.MockMvcBuilders")##

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest("server.port:0")
public class ApplicationTests {

	@Value("${dollar}{local.server.port}")   
    int port;
	
	@Autowired
	ScrRepository repository;
	
	final String BASE_URL = "http://localhost:8080/myApp";

    @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @After
    public  void downUp(){
    	this.mockMvc = null;
    }
    
    @Test
    public void testSayHelloWorld() throws Exception{

    	Scr scr = repository.findOne(-1L);
    	System.out.println("Object AVANT: " + scr.getScrTxt().length());
    	
    	scr.setScrTxt(scr.getScrTxt() + "\r\n<!--CLOB-->");
    	scr = repository.save(scr);
    }

    @Test
    public void contextLoads() {
    }
}
