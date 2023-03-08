package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.Flowers;
import com.example.demo.repositories.FlowerRepo;
import com.example.demo.service.ApiService;

@RestController
@RequestMapping("/flower")
public class ApiController 
{
	@Autowired
	ApiService service;
	
	@Autowired 
	FlowerRepo repository;
	
	//inserting
	@CrossOrigin
	@PostMapping("")
	public String create(@RequestBody Flowers flower)
	{
		return service.addFlower(flower);
	}
	
	//selecting
	@CrossOrigin
	@GetMapping("")
	public List<Flowers>read()
	{
		return service.getFlower();
	}
	
	//updating
	@CrossOrigin
	@PutMapping("/{id}")
	public String update(@RequestBody Flowers flower)
	{
		return service.updateFlower(flower);
	}
	
	//deleting
	@CrossOrigin
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id)
	{
		return service.deleteFlowerById(id);
	}

//	//sorting
//	@GetMapping("/{field}")
//	public List<Flowers>flowerWithSort(@PathVariable String field)
//	{
//		return service.getFlowerSorted(field);
//	}
//	
//	//pagination
//	@GetMapping("/{offset}/{pageSize}")
//	public List<Flowers>flowerWithPagination(@PathVariable int offset,@PathVariable int pageSize)
//	{
//		return service.getFlowerWithPagination(offset, pageSize);
//	}
//	
//	//sorting and pagination
//	@GetMapping("/{offset}/{pageSize}/{field}")
//	public List<Flowers>getFlowerWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field)
//	{
//		return service.getFlowerWithPaginationAndSorting(offset, pageSize,field);
//	}
//	
//	//findbyFlower1
//	@GetMapping("/name1/{name1}")
//	public List<Flowers> getFlowerByname1(@PathVariable String name1)
//	{
//		return repository.findByFlowerName1(name1);
//	}
//	
//	//findbyFlower2
//	@GetMapping("/name2/{name2}")
//	public List<Flowers> getFlowerByname2(@PathVariable String name2)
//	{
//		return repository.findByFlowerName2(name2);
//	}
//	
//	//findByOrderDate
//	@GetMapping("/orderDate/{ordDate}")
//	public List<Flowers> getFlowerByOrderDate(@PathVariable String ordDate)
//	{
//		return repository.findByOrderDate(ordDate);
//	}
//	
//	//findByDeliveryDate
//	@GetMapping("/deliveryDate/{delDate}")
//	public List<Flowers> getFlowerByDeliveryDate(@PathVariable String delDate)
//	{
//		return repository.findByDeliveryDate(delDate);
//	}
}
