package io.khasang.teamnote.controller;

import io.khasang.teamnote.model.Cat;
import io.khasang.teamnote.model.Message;
import io.khasang.teamnote.service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class AppController {
    /*@Autowired
    @Value("Jack Vorobey")
    private Message message;*/

    @Autowired
    private CatService catService;

    private final Message message;
    private final Message message2;

    ///Поумолчанию аннотация @Autowired требует, чтобы аннотируеммые ею свойства и параметры были связанны, т.е. для них были подходящие компоненты NoSachBeanDefenishionExeption
    //Чтобы определить необязательное автоматическое связование, необходимо @Autowired (required = false)
    //Когда проблема обусловлена не отсутствием компонента, а неоднозначностью выбора
    //Тогда следует добавить аннотацию @Qualifier
    @Autowired
    public AppController( @Value("Jack Vorobey") Message message, @Value("Ok") Message message2) {
        this.message = message;
        this.message2 = message2;
    }


    //http://localhost:8080/
    @RequestMapping("/")
    public String helloPage(Model model){
        //model.addAttribute("name", "Hello Spring world!");
        model.addAttribute("name", message.getName());
        model.addAttribute("name2", message2.getName());
        return "hello";
    }

    @RequestMapping("/create")
    public String stausCatTableCreation(Model model) /*throws SQLException*/ {
        model.addAttribute("create", catService.createCatTableStatus());

        Map<String, String> mapCatsAttributes = new HashMap();
        mapCatsAttributes.put("insert1", catService.incertLine(new Cat(1, "Barsik")));
        mapCatsAttributes.put("insert2", catService.incertLine(new Cat(2, "Vasya")));
        mapCatsAttributes.put("insert3", catService.incertLine(new Cat(3, "Vova")));
        model.addAllAttributes(mapCatsAttributes);

        model.addAttribute("update", catService.updateById(new Cat(1, "Old Barsik")));
        model.addAttribute("delete", catService.deleteById(3));
        model.addAttribute("join",   catService.joinCatCompanies());
/*
        try {
            catService.getJdbcTemplate().getDataSource().getConnection().commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }*/
        return "create";
    }

    //Spring JDBC отличается от обычного java jdbc, тем что он открывает и закрывает за нас сессию
    //Какие идут преимущества preparedStatment посравнению с обычными запросами

}
