

      let someSets=new Set([1,2,3,4,5,5,5,5]);

      console.log(someSets.size);

      let set = new Set();
      set.add(5);
      set.add("5");

      console.log(set.has(0));
      console.log(set.has(`5`));
      console.log(set.has(5));
