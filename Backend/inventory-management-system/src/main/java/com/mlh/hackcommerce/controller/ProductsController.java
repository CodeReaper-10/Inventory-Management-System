package com.mlh.hackcommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mlh.hackcommerce.entity.Products;
import com.mlh.hackcommerce.service.ProductsService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class ProductsController {
	
	@Autowired
	private ProductsService productsServ;
	
	@PostMapping(path = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Products> addProduct(@RequestBody Products products) {
		return new ResponseEntity<>(productsServ.addProduct(products), HttpStatus.CREATED);
	}
	
	@GetMapping(path = "/getById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Products> getProductById(@PathVariable Long id) {
		return new ResponseEntity<>(productsServ.getProductById(id), HttpStatus.OK);
	}
	
	@GetMapping(path = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Products>> getAllProducts() {
		return new ResponseEntity<>(productsServ.getAllProducts(), HttpStatus.OK);
	}
	
	@PutMapping(path = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Products> updateProduct(@RequestBody Products products) {
		return new ResponseEntity<>(productsServ.updateProduct(products), HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping(path = "/delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> removeProduct(@PathVariable Long id) {
		productsServ.deleteProduct(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping(path = "/getTotalStock", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Long> getTotalStock() {
		return new ResponseEntity<>(productsServ.totalStock(), HttpStatus.OK);
	}
	
	@GetMapping(path = "/getTotalStockValue", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Double> getTotalStockValue() {
		return new ResponseEntity<>(productsServ.totalStockValue(), HttpStatus.OK);
	}
}
