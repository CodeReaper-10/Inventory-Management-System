package com.mlh.hackcommerce.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mlh.hackcommerce.entity.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long>{
	//public Optional<List<Products>> findByName(String itemName);
	
	@Query(value = "SELECT SUM(units_available) FROM products", nativeQuery = true)
	public Long totalAvailableUnits();
	
	@Query(value = "SELECT SUM(price_per_unit * units_available) FROM products", nativeQuery = true)
	public Double totalValueOfUnits();
}