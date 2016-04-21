package com.jaxio.demo;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.context.WebApplicationContext;

import com.jaxio.demo.domain.Scr;
import com.jaxio.demo.repository.ScrRepository;

import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest("server.port:0")
public class ApplicationTest {

	@Value("${local.server.port}")   
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

		// test
    	Scr scr = repository.findOne(-1L);
    	//System.out.println("Object AVANT: " + scr.toString());
    	System.out.println("Object AVANT: " + scr.getScrTxt().length());
    	
    	scr.setScrTxt(scr.getScrTxt() + "\r\n<!--CLOB-->");
    	scr = repository.save(scr);
    	//System.out.println("Object APRES: " + scr.toString());
    	// end
    }

    @Test
    public void contextLoads() {
    }
}
