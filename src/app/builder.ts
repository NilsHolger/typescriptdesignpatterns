class TechnologyBuilder {
  private name: string;
  private power: number;
  private memory: string;
  private iskiller: boolean;

  constructor(name: string) { this.name = name; }
  get Name() { return this.name; }
  setPower(value: number): TechnologyBuilder {
    this.power = value;
    return this;
  }
  get Power() { return this.power; }
  setMemory(value: string): TechnologyBuilder {
    this.memory = value;
    return this;
  }
  get Memory() { return this.memory; }
  setIsKiller(value: boolean) {
    this.iskiller = value;
    return this;
  }
  get IsKiller() { return this.iskiller; }
  build(): Technology { return new Technology(this); }
}
class Technology {
  private name: string;
  private power: number;
  private memory: string;
  private iskiller: boolean;
  constructor(builder: TechnologyBuilder) {
    this.name = builder.Name;
    this.power = builder.Power;
    this.memory = builder.Memory;
    this.iskiller = builder.IsKiller;
  }
  get Name() { return this.name; }
  get Power() { return this.power; }
  get Memory() { return this.memory; }
  get IsKiller() { return this.iskiller; }
}
export class Builder {
  execute(): string {
    const t: Technology = new TechnologyBuilder('xyz')
                              .setPower(100)
                              .setMemory('12345')
                              .setIsKiller(true)
                              .build();
    return t.Name + ' ' + t.Power + ' ' + t.Memory + ' ' + t.IsKiller;
  }
}