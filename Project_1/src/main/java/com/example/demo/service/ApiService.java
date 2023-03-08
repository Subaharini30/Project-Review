package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.demo.models.Flowers;
import com.example.demo.repositories.FlowerRepo;

@Service
public class ApiService 
{
	@Autowired
	FlowerRepo repository;
	
	//inserting
	public String addFlower(Flowers flower)
	{
		repository.save(flower);
		return "Data of the customer is added!";
	}
	
	//selecting
	public List<Flowers>getFlower()
	{
		return repository.findAll();
	}
	
	//updating
	public String updateFlower(Flowers flower)
	{
		repository.save(flower);
		return "Data of the customer has been updated!";
	}
	
	//deleting
	public String deleteFlowerById(int id)
	{
		repository.deleteById(id);
		return "Data of the customer is deleted!";
	}
	
//	//sorting
//	public List<Flowers>getFlowerSorted(String field)
//	{
//		return repository.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//	
//	//pagination
//	public List<Flowers>getFlowerWithPagination(int offset,int pageSize)
//	{
//		Page<Flowers> page=repository.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
//	
//	//sorting and pagination
//	public List<Flowers>getFlowerWithPaginationAndSorting(int offset,int pageSize,String field)
//	{
//		Page<Flowers>page=repository.findAll(PageRequest.of(offset, pageSize,Sort.by(field)));
//		return page.getContent();
//	}
}
