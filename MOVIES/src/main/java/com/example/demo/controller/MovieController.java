package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.MovieModel;
import com.example.demo.repository.MovieRepository;
import com.example.demo.service.MovieService;

@RestController
public class MovieController {
	@Autowired
	MovieRepository movie;
	@Autowired
	MovieService service;
	@GetMapping("/get")
	List<MovieModel> getList(){
		return movie.findAll();
}
	@PostMapping("/post")
	public MovieModel create (@RequestBody MovieModel abc) {
		return movie.save(abc);
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam int id) {
		return service.deleteDetails(id);
}
}